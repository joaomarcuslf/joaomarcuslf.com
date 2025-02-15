import ExpandedPosts from "@/components/expanded/posts";
import CalendarButton from "@/components/theme/calendar-button";
import Introduction from "@/components/theme/introduction";
import TOC from "@/components/theme/table-of-contents";
import site from "@/site";
import { CopyMetadata, copyMetadataSerializer } from "@/types/copy";
import { PostMetadata, postMetadataSerializer } from "@/types/post";
import { getContent, getContentMetadataList } from "@/utils/metadata";

export let metadata = {
  title: `Blog - ${site.name}`,
  description: `I write a lot of Techinical Articles, about Technology, Career, Data Structures, for all levels. ${site.description}`,
};

export default function Posts() {
  const postsMetadata = getContentMetadataList<PostMetadata>(
    "posts",
    postMetadataSerializer,
    { reverse: true }
  );

    const copy = getContent<CopyMetadata>(
      "copies",
      copyMetadataSerializer,
      "introduction-blog"
    );

  return (
    <main>
      <Introduction
        theme="danger"
        title={copy.title}
        subtitle={copy.subtitle}
        content={copy.content}
        className="has-background bg-posts typewriter"
      />

      <ExpandedPosts posts={postsMetadata.filter((p) => !p.draft)} />

      <CalendarButton />

      <TOC />
    </main>
  );
}
