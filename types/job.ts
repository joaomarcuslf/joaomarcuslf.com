import { Metadata, Serializer, fileNameToKey } from "./metadata";

export type JobMetadata = Metadata & {
  layout: string;
  tags: string[];
  startDate: string;
  endDate: string;
  companyName: string;
  companyImg: string;
  companyRef: string;
  name: string;
  description: string;
}

export const jobMetadataSerializer: Serializer<JobMetadata> = (data, fileName, folder) => {
  return {
    key: fileNameToKey(fileName),
    domain: folder,
    layout: data.layout,
    tags: data.tags,
    startDate: data.start_date,
    endDate: data.end_date,
    companyName: data.company_name,
    companyImg: data.company_img,
    companyRef: data.company_ref,
    name: data.name,
    description: data.description.replaceAll("\n", "<br/><br/>")
  };
};
