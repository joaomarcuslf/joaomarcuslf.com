import ExpandedProjects from "@/components/expanded/projects";
import Introduction from "@/components/theme/introduction";
import { ProjectMetadata, projectMetadataSerializer } from "@/types/project";
import { getContentMetadataList } from "@/utils/metadata";

export default function Projects() {
  const projectsMetadata = getContentMetadataList<ProjectMetadata>(
    "projects",
    projectMetadataSerializer,
    { reverse: true }
  );

  return (
    <main>
      <Introduction
        theme="danger"
        title="Projects Page"
        subtitle="Most of my projects are open source and contains some things I'm studying, here, check it out."
        className="has-background bg-projects typewriter"
      />

      <ExpandedProjects projects={projectsMetadata} />
    </main>
  );
}
