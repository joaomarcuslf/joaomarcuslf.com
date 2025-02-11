import Resume from "@/components/resume";
import { JobMetadata, jobMetadataSerializer, JobMetadataWithContent } from "@/types/job";
import { getContentMetadataList } from "@/utils/metadata";

export default function ResumePage() {
  const topJobs = getContentMetadataList<JobMetadata>(
    "jobs",
    jobMetadataSerializer,
    { withContent: true, reverse: true }
  ) as JobMetadataWithContent[];

  return (
    <main>
      <Resume topJobs={topJobs} />
    </main>
  );
}
