"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getIcon } from "@/utils/icon";
import { SkillMetadata } from "@/types/skill";

export default function MasiSkill({ skills }: { skills: SkillMetadata[] }) {
  const [skill, setSkill] = useState<SkillMetadata | null>(null);

  const searchParams = useSearchParams();

  const searchSkill = searchParams.get("skill");

  useEffect(() => {
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
    }, 200);
  }, [searchSkill, skills]);


  return (
    skill && (
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

          <Link
            href="/about-me"
            className="button has-icon is-light is-rounded is-outlined"
          >
            <span className="icon is-large">
              <i className="fa fa-times fa-md"></i>
            </span>
          </Link>
        </div>
      </div>
    )
  );
}
