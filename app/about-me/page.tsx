import ExpandedSkills from "@/components/expanded/skills";
import ExpandedProjects from "@/components/expanded/projects";
import Introduction from "@/components/theme/introduction";
import JobTimeline from "@/components/job-timeline";
import { JobMetadata, JobMetadataWithContent, jobMetadataSerializer } from "@/types/job";
import { getContent, getContentMetadataList } from "@/utils/metadata";
import { ProjectMetadata, projectMetadataSerializer } from "@/types/project";
import { SkillMetadata, skillMetadataSerializer } from "@/types/skill";
import site from "@/site";
import { sortMetadataByRules, flatten } from "@/utils/helpers";
import { CopyMetadata, copyMetadataSerializer } from "@/types/copy";

export default function Projects() {
  const techMetadata = getContentMetadataList<SkillMetadata>(
    "skills/techs",
    skillMetadataSerializer,
    { domain: "tech" }
  );
  const softSkillsMetadata = getContentMetadataList<SkillMetadata>(
    "skills/soft-skills",
    skillMetadataSerializer,
    { domain: "soft-skill" }
  );
  const hardSkillsMetadata = getContentMetadataList<SkillMetadata>(
    "skills/hard-skills",
    skillMetadataSerializer,
    { domain: "hard-skill" }
  );
  const jobsMetadata = getContentMetadataList<JobMetadata>(
    "jobs",
    jobMetadataSerializer,
    { withContent: true }
  ) as JobMetadataWithContent[];
  const projectsMetadata = getContentMetadataList<ProjectMetadata>(
    "projects",
    projectMetadataSerializer,
    { reverse: true }
  );
  const copy = getContent<CopyMetadata>(
    "copies",
    copyMetadataSerializer,
    "introduction-about-me"
  );


  return (
    <main>
      <Introduction
        theme="danger"
        title={copy.title}
        subtitle={copy.subtitle}
        content={copy.content}
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
