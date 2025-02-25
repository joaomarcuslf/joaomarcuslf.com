import ExpandedMentorships from "@/components/expanded/mentorships";
import CalendarButton from "@/components/theme/calendar-button";
import Introduction from "@/components/theme/introduction";
import TOC from "@/components/theme/table-of-contents";
import site from "@/site";
import { CopyMetadata, copyMetadataSerializer } from "@/types/copy";
import { PostMetadata, postMetadataSerializer } from "@/types/post";
import { getContent, getContentMetadataList } from "@/utils/metadata";

export let metadata = {
  title: `Mentorships - ${site.name}`,
  description: `Some example of my Mentorships written as a article. ${site.description}`,
};

export default function Mentorships() {
  const mentorshipsMetadata = getContentMetadataList<PostMetadata>(
    "mentorships",
    postMetadataSerializer
  );

  const copy = getContent<CopyMetadata>(
    "copies",
    copyMetadataSerializer,
    "introduction-mentorship"
  );

  return (
    <main>
      <Introduction
        theme="danger"
        title={copy.title}
        subtitle={copy.subtitle}
        content={copy.content}
        className="has-background bg-mentorships typewriter"
      />

      <ExpandedMentorships mentorships={mentorshipsMetadata.filter((p) => !p.draft)} />

      <CalendarButton />

      <TOC />
    </main>
  );
}
