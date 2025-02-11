import { Metadata, Serializer, fileNameToKey } from "./metadata";

export type CopyMetadata = Metadata &{
  title: string;
  subtitle: string;
}

export const copyMetadataSerializer: Serializer<CopyMetadata> = (data, fileName, folder) => {
  return {
    key: fileNameToKey(fileName),
    domain: folder,
    title: data.title,
    subtitle: data.subtitle,
  };
};
