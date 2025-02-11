import { Contentdata, Metadata, Serializer, fileNameToKey } from "./metadata";

export type JobMetadata = Metadata & {
  tags: string[];
  startDate: string;
  endDate: string;
  companyName: string;
  companyImg: string;
  companyRef: string;
  name: string;
  shortDescription: string;
}

export const jobMetadataSerializer: Serializer<JobMetadata> = (data, fileName, folder) => {
  return {
    key: fileNameToKey(fileName),
    domain: folder,
    tags: data.tags,
    startDate: data.start_date,
    endDate: data.end_date,
    companyName: data.company_name,
    companyImg: data.company_img,
    companyRef: data.company_ref,
    name: data.name,
    shortDescription: data.short_description,
  };
};

export type JobMetadataWithContent = JobMetadata & Contentdata;
