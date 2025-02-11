import TopicView from "@/components/view/topic";
import { TopicMetadata } from "@/types/topic";

export default function ExpandedTopics({
  topics,
}: {
  topics: TopicMetadata[];
}) {
  return (
    <section className={`hero topics-section is-dark`}>
      <div className="hero-body">
        <h2 className="topics-section-title">Ice Breaker Topics</h2>

        <div className="topics-section-group">
          {topics.map((topic) => (
            <TopicView key={topic.key} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}
