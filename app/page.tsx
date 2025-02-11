import site from "@/site";
import HighlightedPosts from "@/components/highlights/posts";
import HighlightedProjects from "@/components/highlights/projects";
import HighlightedSkills from "@/components/highlights/skills";
import Introduction from "@/components/theme/introduction";
import JobTimeline from "@/components/job-timeline";
import { JobMetadata, jobMetadataSerializer } from "@/types/job";
import { PostMetadata, postMetadataSerializer } from "@/types/post";
import { ProjectMetadata, projectMetadataSerializer } from "@/types/project";
import { SkillMetadata, skillMetadataSerializer } from "@/types/skill";
import { flatten, sortMetadataByRules } from "@/utils/helpers";
import { getContentMetadataList } from "@/utils/metadata";

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
    jobMetadataSerializer
  );
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

  return (
    <main>
      <Introduction
        theme="info"
        title="Hi, I'm João&nbsp;Marcus&nbsp;Fernandes"
        subtitle="I'm Full-stack web developer since 2015, I've worked mostly with Javascript, Go, and Python,<br />but I love to learn new techs, and learn new things along the way.<br />I love to write, and teach, you can check <a href='/posts' aria-label='Link for my posts page'>my posts</a>, and if you need a <a href='/mentorship' aria-label='Link for my mentorship page'>tech mentor</a> you can contact me, I'll be glad to help you.<br />I'm also graduated at Analysis and development of systems on Faeterj-RIO."
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
    </main>
  );
}
