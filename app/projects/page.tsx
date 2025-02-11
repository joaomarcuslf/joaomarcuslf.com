import ExpandedProjects from "@/components/expanded/projects";
import Introduction from "@/components/theme/introduction";
import TOC from "@/components/theme/table-of-contents";
import { CopyMetadata, copyMetadataSerializer } from "@/types/copy";
import { ProjectMetadata, projectMetadataSerializer } from "@/types/project";
import { getContent, getContentMetadataList } from "@/utils/metadata";

export default function Projects() {
  const projectsMetadata = getContentMetadataList<ProjectMetadata>(
    "projects",
    projectMetadataSerializer,
    { reverse: true }
  );

   const copy = getContent<CopyMetadata>(
     "copies",
     copyMetadataSerializer,
     "introduction-project"
   );


  return (
    <main>
      <Introduction
        theme="danger"
        title={copy.title}
        subtitle={copy.subtitle}
        content={copy.content}
        className="has-background bg-projects typewriter"
      />

      <ExpandedProjects projects={projectsMetadata} />

      <TOC />
    </main>
  );
}
