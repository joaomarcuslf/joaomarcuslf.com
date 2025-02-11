import { Metadata, Serializer, fileNameToKey } from "./metadata";

export type TopicMetadata = Metadata & {
  key: string;
  name: string;
  externalLink: string;
}

export const topicMetadataSerializer: Serializer<TopicMetadata> = (data, fileName, folder) => {
  return {
    key: fileNameToKey(fileName),
    domain: folder,
    name: data.name,
    externalLink: data.external_link,
  };
};
