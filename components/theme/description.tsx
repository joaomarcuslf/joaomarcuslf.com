import Markdown from "markdown-to-jsx";

export default function Description({
  className,
  title,
  content,
}: {
  className: string;
  title: string;
  content: string;
}) {
  return (
    <section id="description" className={`hero is-dark ${className}`}>
      <div className="hero-body">
        <h2 className="title">{title}</h2>
        <Markdown className="content is-normal has-text-centered">
          {content}
        </Markdown>
      </div>
    </section>
  );
}
