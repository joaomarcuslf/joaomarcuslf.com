import { getIcon } from "@/utils/icon";
import { SkillMetadata } from "@/types/skill";

export default function MainSkill({ skill, selectSkill }: { skill: SkillMetadata; selectSkill: (searchSkill: string | null) => void}) {
  return (
    <div id="mainSkill" className="skills-section-item card main-skill">
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
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => selectSkill(null)}
          className="button has-icon is-light is-rounded is-outlined"
        >
          <span className="icon is-large">
            <i className="fa fa-times fa-md"></i>
          </span>
        </button>
      </div>
    </div>
  );
}
