import Link from "next/link";

import { SkillMetadata } from "@/types/skill";
import { getIcon } from "@/utils/icon";

export default function SkillView({ skill }: { skill: SkillMetadata }) {
  return (
    <div className="skills-section-item card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <span className="icon is-large">
              <span className={`fa ${getIcon(skill)} fa-lg`}> </span>
            </span>
            <p className="skills-section-title is-4">{skill?.name}</p>
          </div>
        </div>
        <div className="content has-text-centered">
          <div className="tags mb-0">
            {skill?.subSkills?.map((skill: string) => (
              <span className="tag is-hidden" key={skill}>
                {skill}
              </span>
            ))}
          </div>
          <Link
            href={`/about-me?skill=${skill.key}`}
            className="button has-icon has-text is-light is-rounded is-outlined"
          >
            <span className="mr-1">Show Subskills</span>

            <span className="icon is-large">
              <i className="fas fa-chevron-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
