import { ProjectMetadata } from "@/types/project";
import ProjectView from "@/components/view//project";

export default function ExpandedProjects({ projects }: { projects: ProjectMetadata[] }) {
  return (
    <section className="hero projects-section is-light">
      <div className="hero-body">
        <h2 className="projects-section-title">Projects</h2>

        <div className="projects-section-group">
          {projects.map((item: ProjectMetadata) => (
            <ProjectView key={item.key} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
