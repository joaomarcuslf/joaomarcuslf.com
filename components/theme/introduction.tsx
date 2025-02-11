import Markdown from "markdown-to-jsx";

export default function Introduction({
  theme,
  className,
  title,
  subtitle,
  content,
}: {
  theme: string;
  className: string;
  title: string;
  subtitle: string;
  content: string;
}) {
  return (
    <section className={`introduction hero is-${theme} ${className}`}>
      <div className="hero-body">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
        <Markdown className="content is-normal has-text-centered">{content}</Markdown>
      </div>
    </section>
  );
}
