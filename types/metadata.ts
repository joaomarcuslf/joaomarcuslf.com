export type Serializer<T> = (data: any, fileName: string, folder: string) => T;

export type Metadata = {
  key: string;
  domain: string;
}

export type Contentdata = {
  content: string;
}

export function fileNameToKey(fileName: string): string {
  return fileName.replace(/\.md$/, "").toLowerCase();
}
