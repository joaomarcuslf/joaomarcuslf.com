import { Serializer } from '@/types/metadata';
import fs from 'fs';
import matter from 'gray-matter';

export function getContentMetadata<T>(content: string, serializer: Serializer<T>, options?: {
  reverse?: boolean;
  top?: boolean;
  domain?: string;
}): T[] {
  const folder = `contents/${content}/`;
  const files = fs.readdirSync(folder);

  const markdownContent = files.filter((file) => file.endsWith('.md'));

  let contentData = markdownContent.map((fileName) => {
    const contents = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
    const result = matter(contents);

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

  return contentData;
}
