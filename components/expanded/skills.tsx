import { Suspense } from "react";

import SkillView from "@/components/view/skill";
import { SkillMetadata } from "@/types/skill";
import MasiSkill from "@/components/view//main-skill";

export default function ExpandedSkills({
  skills,
}: {
  skills: SkillMetadata[];
}) {
  return (
    <section className={`hero skills-section is-dark`}>
      <div className="hero-body">
        <h2 className="skills-section-title">Skills</h2>

        <div className={`skills-section-group`}>
          <Suspense>
            <MasiSkill skills={skills} />
          </Suspense>

          {skills.map((skill) => (
            <SkillView key={skill.key} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
