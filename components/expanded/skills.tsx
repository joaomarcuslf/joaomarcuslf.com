"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import SkillView from "@/components/view/skill";
import { SkillMetadata, DomainDictionary } from "@/types/skill";
import MainSkill from "@/components/view//main-skill";

function ExpandedSkills({
  skills,
}: {
  skills: SkillMetadata[];
}) {
  const [shownSkills, setShownSkills] = useState<SkillMetadata[]>(skills);
  const [skill, setSkill] = useState<SkillMetadata | null>(null);

  const [domain, setDomain] = useState<string | null>(null);
  const [domainList, setDomainList] = useState<{
    name: string;
    count: number;
  }[] | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();

  const searchSkill = searchParams.get("skill");

  useEffect(() => {
    if (domain) {
      setShownSkills(skills.filter((skill) => skill.domain === domain));
    } else {
      setShownSkills(skills);
    }
  }, [domain, skills]);

  useEffect(() => {
    if (searchSkill) {
      selectSkill(searchSkill);

      router.replace(window.location.pathname, {});
    }
  }, [searchSkill, skills, router]);

  useEffect(() => {
    const domainList = skills.reduce((acc, skill) => {
      const domain = skill.domain;

      if (!acc[domain]) {
        acc[domain] = 0;
      }

      acc[domain]++;

      return acc;
    }, {} as { [key: string]: number });

    setDomainList(
      Object.keys(domainList).map((domain) => ({
        name: domain,
        count: domainList[domain],
      }))
    );
  }, [skills]);

  const selectDomain = (d: string) => {
    setSkill(null);

    if (d !== domain) {
      setDomain(d);
    } else {
      setDomain(null);
    }

    scrollToSection();
  }

  const selectSkill = (searchSkill: string | null) => {
    const foundSkill = skills.find((skill) => skill.key === searchSkill);

    if (foundSkill) {
      setSkill(foundSkill);
    } else {
      setSkill(null);
    }

    scrollToSection();
  };

  const scrollToSection = () => {
    if (!domain && !searchSkill && !skill) return;

     setTimeout(() => {
       const element = document.querySelector(`.skills-section`);

       if (element) {
         element.scrollIntoView({ behavior: "smooth" });
       }
     }, 200);
  }

  return (
    <section className={`hero skills-section is-dark`}>
      <div className="hero-body">
        <h2 className="skills-section-title">Skills</h2>

        <div className="skills-tags content is-flex-container is-row has-space-around is-align-center is-wrap">
          {domainList &&
            domainList.map((d) => (
              <a
                key={d.name}
                className="tags are-medium has-addons"
                onClick={() => selectDomain(d.name)}
              >
                <span className="tag is-info">{d.count}</span>

                <span
                  key={d.name}
                  className={`tag ${
                    d.name === domain ? "is-primary" : "is-light"
                  }`}
                >
                  {DomainDictionary[d.name]}
                </span>
              </a>
            ))}
        </div>

        <div className="skills-section-group">
          {skill && <MainSkill skill={skill} selectSkill={selectSkill} />}

          {shownSkills.map((skill) => (
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

export default function Container({ skills }: { skills: SkillMetadata[] }) {
  return <Suspense>
    <ExpandedSkills skills={skills} />
  </Suspense>
};
