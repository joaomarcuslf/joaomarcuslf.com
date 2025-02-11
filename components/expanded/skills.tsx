"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import SkillView from "@/components/view/skill";
import { SkillMetadata } from "@/types/skill";
import MainSkill from "@/components/view//main-skill";

export default function ExpandedSkills({
  skills,
}: {
  skills: SkillMetadata[];
}) {
  // console.log(skills);
  const [skill, setSkill] = useState<SkillMetadata | null>(null);

  const searchParams = useSearchParams();

  const searchSkill = searchParams.get("skill");

  useEffect(() => {
    if (searchSkill) {
      selectSkill(searchSkill);
    }
  }, [searchSkill, skills]);

  const selectSkill = (searchSkill: string | null) => {
    const foundSkill = skills.find((skill) => skill.key === searchSkill);
    let sectionToFocus = "nav";

    if (foundSkill) {
      setSkill(foundSkill);
      sectionToFocus = "skills-section";
    }

    if (!foundSkill) {
      setSkill(null);
    }

    setTimeout(() => {
      const element = document.querySelector(`.${sectionToFocus}`);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      // searchParams.set("skill", searchSkill);
    }, 200);
  };

  return (
    <section className={`hero skills-section is-dark`}>
      <div className="hero-body">
        <h2 className="skills-section-title">Skills</h2>

        <div className={`skills-section-group`}>
          {skill && <MainSkill skill={skill} selectSkill={selectSkill} />}

          {skills.map((skill) => (
            <SkillView
              key={skill.key}
              skill={skill}
              selectSkill={selectSkill}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
