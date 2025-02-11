import Image from "next/image";

import { ProjectMetadata } from "@/types/project";

export default function ProjectView({ project }: { project: ProjectMetadata }) {
  return (
    <a
      className="projects-section-item"
      href={project.link}
      target="blank"
      aria-label={`This image is a link for the '${project.repo}' on Github.`}
    >
      <article className="media project-card">
        <figure className="media-left">
          <p className="image is-64x64">
            <Image
              src={`https://raw.githubusercontent.com/devicons/devicon/master/icons/${project.main}/${project.main}-original.svg`}
              alt={`${project.main} logo`}
              width="64"
              height="64"
            />
          </p>
        </figure>

        <div className="media-content">
          <div className="content">
            <p>
              <small>{project.user}</small>/<strong>{project.repo}</strong>
              <br />
              {project.title}
            </p>
          </div>

          <nav className="projects-tags-level level is-mobile">
            <div className="level-left">
              <div className="tags">
                {project?.collaborator && (
                  <span className="tag is-highlight">Collaborating</span>
                )}

                {project?.techs?.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </article>
    </a>
  );
}
