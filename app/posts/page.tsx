import ExpandedPosts from "@/components/expanded/posts";
import Introduction from "@/components/theme/introduction";
import { PostMetadata, postMetadataSerializer } from "@/types/post";
import { getContentMetadataList } from "@/utils/metadata";

export default function Posts() {
  const postsMetadata = getContentMetadataList<PostMetadata>(
    "posts",
    postMetadataSerializer,
    { reverse: true }
  );

  return (
    <main>
      <Introduction
        theme="danger"
        title="Posts Page"
        subtitle="Hey you! I've written and gave some presentations, here you can check out then."
        className="has-background bg-posts typewriter"
      />

      <ExpandedPosts posts={postsMetadata.filter(p => !p.draft)} />
    </main>
  );
}
