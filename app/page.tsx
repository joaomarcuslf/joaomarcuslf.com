import site from "@/site";
import HighlightedPosts from "@/components/highlights/posts";
import HighlightedProjects from "@/components/highlights/projects";
import HighlightedSkills from "@/components/highlights/skills";
import Introduction from "@/components/theme/introduction";
import JobTimeline from "@/components/job-timeline";
import { JobMetadata, JobMetadataWithContent, jobMetadataSerializer } from "@/types/job";
import { PostMetadata, postMetadataSerializer } from "@/types/post";
import { ProjectMetadata, projectMetadataSerializer } from "@/types/project";
import { SkillMetadata, skillMetadataSerializer } from "@/types/skill";
import { flatten, sortMetadataByRules } from "@/utils/helpers";
import { getContent, getContentMetadataList } from "@/utils/metadata";
import { CopyMetadata, copyMetadataSerializer } from "@/types/copy";
import TOC from "@/components/theme/table-of-contents";
import CalendarButton from "@/components/theme/calendar-button";

export default function Home() {
  const techMetadata = getContentMetadataList<SkillMetadata>(
    "skills/techs",
    skillMetadataSerializer,
    { top: true }
  );
  const softSkillsMetadata = getContentMetadataList<SkillMetadata>(
    "skills/soft-skills",
    skillMetadataSerializer,
    { top: true }
  );
  const hardSkillsMetadata = getContentMetadataList<SkillMetadata>(
    "skills/hard-skills",
    skillMetadataSerializer,
    { top: true }
  );
  const jobsMetadata = getContentMetadataList<JobMetadata>(
    "jobs",
    jobMetadataSerializer,
    { withContent: true }
  ) as JobMetadataWithContent[];
  const postsMetadata = getContentMetadataList<PostMetadata>(
    "posts",
    postMetadataSerializer,
    { reverse: true }
  );
  const projectsMetadata = getContentMetadataList<ProjectMetadata>(
    "projects",
    projectMetadataSerializer,
    { reverse: true }
  );
  const copy = getContent<CopyMetadata>(
    "copies",
    copyMetadataSerializer,
    "introduction-main"
  );

  return (
    <main>
      <Introduction
        theme="info"
        title={copy.title}
        subtitle={copy.subtitle}
        content={copy.content}
        className="has-background bg-home typewriter"
      />
      <JobTimeline jobs={jobsMetadata} />
      <HighlightedSkills
        skills={sortMetadataByRules(
          flatten<SkillMetadata>([
            techMetadata,
            softSkillsMetadata,
            hardSkillsMetadata,
          ]),
          site.skillOrder
        )}
      />
      <HighlightedPosts posts={postsMetadata} />
      <HighlightedProjects projects={projectsMetadata} />

      <CalendarButton />

      <TOC />
    </main>
  );
}
