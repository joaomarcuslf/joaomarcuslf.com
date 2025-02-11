import fs from 'fs';

import matter from 'gray-matter';

import { Contentdata, Serializer } from '@/types/metadata';

const parseContentResult = (result: matter.GrayMatterFile<string>) => {
  return result?.content?.replaceAll("class=", "className=")
}

export function getContentMetadataList<T>(domain: string, serializer: Serializer<T>, options?: {
  reverse?: boolean;
  top?: boolean;
  domain?: string;
  withContent?: boolean;
  size?: number;
  skip?: number;
}): T[] {
  const folder = `contents/${domain}/`;
  const files = fs.readdirSync(folder);

  const markdownContent = files.filter((file) => file.endsWith('.md'));

  let contentData = markdownContent.map((fileName) => {
    const contents = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
    const result = matter(contents);

    if (options?.withContent) {
      return {
        ...serializer(result.data, fileName, folder),
        content: parseContentResult(result),
      } as T & Contentdata;
    }

    return serializer(result.data, fileName, folder);
  });

  if (options?.top) {
    type GenericTop = T & { top?: boolean };

    contentData = (contentData as GenericTop[]).filter((data) => data?.top);
  }

  if (options?.domain) {
    contentData = contentData.map((data) => ({ ...data, domain: options.domain}));
  }

  if (options?.reverse) {
    contentData = contentData.reverse();
  }

  if (options?.size) {
    contentData = contentData.slice(0, options.size);
  }

  if (options?.skip) {
    contentData = contentData.slice(options.skip);
  }

  return contentData;
}

export function getContent<T>(domain: string, serializer: Serializer<T>, slug: string, options?: {
  reverse?: boolean;
  top?: boolean;
  domain?: string;
}): T & Contentdata {
  const folder = `contents/${domain}`;
  const fileName = folder + `/${slug}.md`;

  const content = fs.readFileSync(fileName, 'utf8');

  const result = matter(content);

  return {
    ...serializer(result.data, fileName, options?.domain || folder),
    content: parseContentResult(result),
  };
}
