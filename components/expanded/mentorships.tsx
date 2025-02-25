import { PostMetadata } from "@/types/post";
import MentorshipView from "@/components/view/mentorship";

export default function ExpandedMentorship({
  mentorships,
}: {
  mentorships: PostMetadata[];
}) {
  return (
    <section className="hero images-section is-light">
      <div className="hero-body">
        <h3 className="images-section-title">Mentorships</h3>

        <div className="images-section-group">
          {mentorships.map((item: PostMetadata) => (
            <MentorshipView key={item.slug} mentorship={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
