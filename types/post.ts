import { Metadata, Serializer, fileNameToKey } from "./metadata";

export type PostMetadata = Metadata &{
  title: string;
  subtitle: string;
  img: string;
  alt: string;
  slug: string;
  internal: boolean;
  draft: boolean;
  lang: string;
  tags: string[];
  date: string;
}

export const postMetadataSerializer: Serializer<PostMetadata> = (data, fileName, folder) => {
  const date = fileName.substring(0, 10);

  return {
    key: fileNameToKey(fileName),
    domain: folder,
    title: data.title,
    subtitle: data.subtitle,
    img: data.img,
    alt: data.alt,
    slug: data.link,
    internal: data.internal,
    draft: data.draft,
    lang: data.lang,
    tags: data.tags,
    date: date
  };
};
