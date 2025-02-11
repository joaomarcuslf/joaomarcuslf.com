import { ProjectMetadata } from "@/types/project";
import Highlight from "@/components/highlights";
import ProjectView from "@/components/view/project";

export default function HighlightedProjects({ projects }: { projects: ProjectMetadata[] }) {
  return (
    <Highlight items={projects} section="project" theme="dark">
      {(project) => <ProjectView key={project.key} project={project} />}
    </Highlight>
  );
}
