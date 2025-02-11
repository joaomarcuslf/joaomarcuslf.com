export default function MentorshipItem({ item }: { item: string }) {
  return (
    <div className="mentorship-lists-section-item card is-mini">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="mentorship-lists-section-title is-4">{item}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
