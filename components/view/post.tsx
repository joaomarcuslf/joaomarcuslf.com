import Link from "next/link";
import Image from "next/image";

import { PostMetadata } from "@/types/post";
import { getCleanSlug } from "@/utils/helpers";

export default function PostView({ post }: { post: PostMetadata }) {
  const WrapperComponent = ({ children }: { children: React.ReactNode}) => {
    return post.internal ? (
      <Link className="images-section-item" href={getCleanSlug(post.slug)}>
        {children}
      </Link>
    ) : (
      <a className="images-section-item" href={post.slug} target="blank">
        {children}
      </a>
    );
  };

  return (
    <WrapperComponent>
      <Image
        className="images-section-image"
        src={post?.img?.replace("/images", "/images/thumbnails")}
        alt={post.alt || `Image from ${post.title}`}
        width="466"
        height="240"
      />

      <h4 className="images-section-subtitle">{post.title}</h4>
      <small>{post.lang?.toUpperCase()}</small>
    </WrapperComponent>
  );
}
