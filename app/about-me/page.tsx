import Introduction from "@/components/theme/introduction";
import JobTimeline from "@/components/job-timeline";
import ExpandedSkills from "@/components/expanded/skills";
import ExpandedProjects from "@/components/expanded/projects";
import ExpandedTopics from "@/components/expanded/topics";
import TOC from "@/components/theme/table-of-contents";
import site from "@/site";
import { CopyMetadata, copyMetadataSerializer } from "@/types/copy";
import { JobMetadata, JobMetadataWithContent, jobMetadataSerializer } from "@/types/job";
import { SkillMetadata, skillMetadataSerializer } from "@/types/skill";
import { ProjectMetadata, projectMetadataSerializer } from "@/types/project";
import { TopicMetadata, topicMetadataSerializer } from "@/types/topic";
import { getContent, getContentMetadataList } from "@/utils/metadata";
import { sortMetadataByRules, flatten } from "@/utils/helpers";
import CalendarButton from "@/components/theme/calendar-button";
import Description from "@/components/theme/description";

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
  const description = getContent<CopyMetadata>(
    "copies",
    copyMetadataSerializer,
    "introduction-about-me-description"
  );
  const topicsMetadata = getContentMetadataList<TopicMetadata>(
    "topics",
    topicMetadataSerializer
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
      <Description title={description.title} content={description.content} className={""} />
      <ExpandedSkills
        skills={sortMetadataByRules<SkillMetadata>(
          flatten<SkillMetadata>([
            techMetadata,
            softSkillsMetadata,
            hardSkillsMetadata,
          ]),
          site.skillOrder
        )}
      />
      <ExpandedProjects projects={projectsMetadata} />
      <ExpandedTopics
        topics={sortMetadataByRules<TopicMetadata>(
          topicsMetadata,
          site.topicOrder
        )}
      />

      <CalendarButton />

      <TOC />
    </main>
  );
}
