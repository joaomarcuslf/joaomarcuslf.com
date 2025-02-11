import ExpandedSkills from "@/components/expanded/skills";
import ExpandedProjects from "@/components/expanded/projects";
import Introduction from "@/components/theme/introduction";
import JobTimeline from "@/components/job-timeline";
import { JobMetadata, jobMetadataSerializer } from "@/types/job";
import { getContentMetadata } from "@/utils/metadata";
import { ProjectMetadata, projectMetadataSerializer } from "@/types/project";
import { SkillMetadata, skillMetadataSerializer } from "@/types/skill";
import site from "@/site";
import { sortMetadataByRules, flatten } from "@/utils/helpers";

export default function Projects() {
  const techMetadata = getContentMetadata<SkillMetadata>(
    "skills/techs",
    skillMetadataSerializer,
    { domain: "tech" }
  );
  const softSkillsMetadata = getContentMetadata<SkillMetadata>(
    "skills/soft-skills",
    skillMetadataSerializer,
    { domain: "soft-skill" }
  );
  const hardSkillsMetadata = getContentMetadata<SkillMetadata>(
    "skills/hard-skills",
    skillMetadataSerializer,
    { domain: "hard-skill" }
  );
  const jobsMetadata = getContentMetadata<JobMetadata>(
    "jobs",
    jobMetadataSerializer
  );
  const projectsMetadata = getContentMetadata<ProjectMetadata>(
    "projects",
    projectMetadataSerializer,
    { reverse: true }
  );

  return (
    <main>
      <Introduction
        theme="danger"
        title="About Me"
        subtitle="Hey you again! Hope you have liked what you saw up to here. <br /><br /> I'm a Full-stack developer, I work with a lot of things, you can check more about <a href='/skill-tree' aria-label='Link for the skill-tree page'>my skills</a>, I love to learn, and teach, so I value a lot either soft-skills and hard-skills, if you want to reach me, you can <a href='/mail-me' aria-label='Link for e-mail me page'>also e-mail me</a>."
        className="has-background bg-about-me typewriter"
      />

      <JobTimeline jobs={jobsMetadata} />
      <ExpandedSkills
        skills={sortMetadataByRules(
          flatten<SkillMetadata>([
            techMetadata,
            softSkillsMetadata,
            hardSkillsMetadata,
          ]),
          site.skillOrder
        )}
      />

      <ExpandedProjects projects={projectsMetadata} />
    </main>
  );
}
