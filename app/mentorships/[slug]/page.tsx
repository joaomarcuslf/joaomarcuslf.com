import fs from "fs";

import React from "react";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import site from "@/site";
import Hljs from "@/components/hljs";
import { PostMetadata, postMetadataSerializer } from "@/types/post";
import { getContentMetadataList, getContent } from "@/utils/metadata";
import "@/public/css/hljs.scss";
import CalendarButton from "@/components/theme/calendar-button";

const mentorshipsMetadata = getContentMetadataList<PostMetadata>(
  "mentorships",
  postMetadataSerializer,
  { reverse: true }
);

export async function generateStaticParams() {
  return mentorshipsMetadata.map((post) => ({ slug: post.key }));
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const mentorship = getContent<PostMetadata>(
    "mentorships",
    postMetadataSerializer,
    params.slug
  );

  return {
    title: `${mentorship.title} | ${site.name}`,
    description: mentorship.subtitle,
    openGraph: {
      title: `${mentorship.title} | ${site.name}`,
      description: mentorship.subtitle,
      url: `${site.url}/mentorships/${params.slug}`,
      type: "article",
      images: [
        {
          url: mentorship.img,
          alt: mentorship.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${mentorship.title} | ${site.name}`,
      description: mentorship.subtitle,
      image: mentorship.img,
    },
  };
};

export default function MentorshipPage({ params }: { params: { slug: string } }) {
  const mentorship = getContent<PostMetadata>(
    "mentorships",
    postMetadataSerializer,
    params.slug
  );

  return (
    <>
      <div className="mentorship">
        <section className="hero is-link has-background is-mini bg-mentorship typewriter">
          <div className="hero-body">
            <h1
              className="title"
              aria-label={mentorship?.title}
              aria-hidden="true"
            >
              {mentorship?.title}
            </h1>
            <h2 className="subtitle">{mentorship?.subtitle}</h2>
          </div>
        </section>

        <div className="mentorship-content content is-medium">
          <Markdown>{mentorship.content}</Markdown>
        </div>
      </div>

      <CalendarButton />

      <Hljs />
    </>
  );
}
