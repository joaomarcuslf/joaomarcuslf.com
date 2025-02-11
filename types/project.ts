import { Metadata, Serializer, fileNameToKey } from "./metadata";

export type ProjectMetadata = Metadata &{
  layout: string;
  title: string;
  repo: string;
  user: string;
  link: string;
  main: string;
  techs: string[];
  collaborator: boolean;
}

export const projectMetadataSerializer: Serializer<ProjectMetadata> = (data, fileName, folder) => {
  return {
    key: fileNameToKey(fileName),
    domain: folder,
    layout: data.layout,
    title: data.title,
    repo: data.repo,
    user: data.user,
    link: data.link,
    main: data.main,
    techs: data.techs,
    collaborator: data.collaborator
  };
};
