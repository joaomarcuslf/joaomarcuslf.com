import { PostMetadata } from "@/types/post";
import Highlight from "@/components/highlights";
import Post from "@/components/post-view";

export default function HighlightedPosts({ posts }: { posts: PostMetadata[] }) {
  const unDraftedPosts = posts?.filter((post) => !post.draft);

  return (
    <Highlight
      items={unDraftedPosts}
      section="post"
      theme="light"
      sectionType="image"
    >
      {(post) => <Post key={post.slug} post={post} />}
    </Highlight>
  );
}
