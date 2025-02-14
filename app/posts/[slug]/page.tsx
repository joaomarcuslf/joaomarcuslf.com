import fs from "fs";

import React from "react";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

import site from "@/site";
import PostView from "@/components/view/post";
import Hljs from "@/components/hljs";
import { PostMetadata, postMetadataSerializer } from "@/types/post";
import { getContentMetadataList, getContent } from "@/utils/metadata";
import { calcRT } from "@/utils/text";
import "@/public/css/hljs.scss";
import CalendarButton from "@/components/theme/calendar-button";
import Description from "@/components/theme/description";
import { getCleanSlug } from "@/utils/helpers";

const postsMetadata = getContentMetadataList<PostMetadata>(
  "posts",
  postMetadataSerializer,
  { reverse: true }
);

export async function generateStaticParams() {
  return postsMetadata.flatMap((post) => [
    { slug: post.key },
    { slug: getCleanSlug(post.key) },
  ]);
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = getContent<PostMetadata>(
    "posts",
    postMetadataSerializer,
    params.slug
  );

  return {
    title: `${post.title} | ${site.name}`,
    description: post.subtitle,
    openGraph: {
      title: `${post.title} | ${site.name}`,
      description: post.subtitle,
      url: `${site.url}/posts/${params.slug}`,
      type: "article",
      images: [
        {
          url: post.img,
          alt: post.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${site.name}`,
      description: post.subtitle,
      image: post.img,
    },
  };
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getContent<PostMetadata>(
    "posts",
    postMetadataSerializer,
    params.slug
  );

  const readingTime = calcRT(post.content);

  const relatedPosts = postsMetadata
    .filter((p) => p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  return (
    <>
      <div className="post">
        <div className="post-header">
          <h1 className="title has-text-left">{post?.title}</h1>

          <h2 className="subtitle has-text-left">{post?.subtitle}</h2>

          <div className="tags mb-0">
            {post?.tags.map((tag: string) => (
              <Link
                id={`tag-${tag}`}
                key={`tag-${tag}`}
                href={`/blog#${tag}`}
                className="tag is-light"
              >
                {tag}
              </Link>
            ))}
          </div>

          <small>
            {readingTime > 1
              ? `${readingTime} minutes`
              : `${readingTime} minute`}{" "}
            to read
          </small>
        </div>

        <Image
          className="is-fullwidth post-cover-image"
          src={post?.img}
          alt={post?.alt}
          height="800"
          width="1600"
        />

        <div className="post-content content is-medium">
          <Markdown>{post.content}</Markdown>
        </div>
      </div>

      <section id="posts" className="hero images-section is-dark">
        <div className="hero-body">
          <h4 className="images-section-subtitle has-text-left">
            You may also enjoy
          </h4>

          <div className="images-section-group is-recommendation">
            {relatedPosts.map((item) => (
              <PostView key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>

      <CalendarButton />

      <Hljs />
    </>
  );
}
