import Link from "next/link";

import { SkillMetadata } from "@/types/skill";
import { getIcon } from "@/utils/icon";

export default function SkillView({
  skill,
  selectSkill,
}: {
  skill: SkillMetadata;
  selectSkill?: (searchSkill: string | null) => void;
}) {

  const LinkWrapper = ({ skill, children }: { skill: SkillMetadata; children: React.ReactElement}) => (
    <Link
        href={`/about-me?skill=${skill.key}`}
        className="button has-icon has-text is-light is-rounded is-outlined"
      >
        {children}
      </Link>
  )

  const ButtonWrapper = ({ skill, children }: { skill: SkillMetadata; children: React.ReactElement}) => (
    selectSkill &&
    <button
        onClick={() => selectSkill(skill.key)}
        className="button has-icon has-text is-light is-rounded is-outlined"
      >
        {children}
      </button>
  )

  const Wrapper = selectSkill ? ButtonWrapper : LinkWrapper;

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
          <Wrapper skill={skill}>
            <>
              <span className="mr-1">Show Subskills</span>

              <span className="icon is-large">
                <i className="fas fa-chevron-right"></i>
              </span>
            </>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
