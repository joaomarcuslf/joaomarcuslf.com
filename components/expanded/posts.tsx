"use client";

import { useState, useEffect } from "react";

import { PostMetadata } from "@/types/post";

import PostView from "@/components/view//post";

const getTags = (posts: PostMetadata[]) => {
  const tags = new Set();
  posts.forEach((post) => {
    post.tags.forEach((tag: string) => tags.add(tag));
  });

  return Array.from(tags) as string[];
};

export default function ExpandedPosts({ posts }: { posts: PostMetadata[] }) {
  const [filteredPosts, setFilteredPosts] = useState<PostMetadata[]>(posts);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setTag] = useState<string | null>(null);

  useEffect(() => {
    const tag = window.location.hash.slice(1);
    if (tag) {
      setFilteredPosts(posts.filter((post) => post.tags.includes(tag)));
      setTag(tag);
    }

    setTags(getTags(posts));
  }, [posts]);

  const filterPosts = (tag: string) => {
    if (tag === "all") {
      setFilteredPosts(posts);
      setTag(null);
      return;
    }

    setFilteredPosts(posts.filter((post) => post.tags.includes(tag)));
    setTag(tag);
  };

  return (
    <section className="hero images-section is-light">
      <div className="hero-body">
        <h2 className="images-section-title">Posts</h2>

        <div className="tags">
          <a
            id="tag-all"
            href="#all"
            className="tag is-info"
            onClick={() => filterPosts("all")}
          >
            {" "}
            Clear{" "}
          </a>
          {tags.map((tag) => (
            <a
              id={`tag-${tag}`}
              href={`#${tag}`}
              className={`tag ${selectedTag === tag ? "is-primary" : "is-light"}`}
              onClick={() => filterPosts(tag)}
              key={tag}
            >
              {tag}
            </a>
          ))}
        </div>

        <div className="images-section-group">
          {filteredPosts.map((item: PostMetadata) => (
            <PostView key={item.slug} post={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
