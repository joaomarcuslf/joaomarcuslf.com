import { TopicMetadata } from "@/types/topic";

export default function TopicView({
  topic,
}: {
  topic: TopicMetadata;
}) {

  return (
    <div className="topics-section-item card">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="topics-section-title is-4">{topic?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
