import { Metadata, Serializer, fileNameToKey } from "./metadata";

export type SkillMetadata = Metadata & {
  key: string;
  name: string;
  top: boolean;
  subSkills: string[];
}

export const skillMetadataSerializer: Serializer<SkillMetadata> = (data, fileName, folder) => {
  return {
    key: fileNameToKey(fileName),
    domain: folder,
    name: data.name,
    top: data.top,
    subSkills: data.sub_skills,
  };
};
