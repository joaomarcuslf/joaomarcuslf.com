export default function Introduction({
  theme,
  className,
  title,
  subtitle,
}: {
  theme: string;
  className: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className={`hero is-${theme} ${className}`}>
      <div className="hero-body">
        <h1 className="title" aria-label={title} aria-hidden="true">
          {title}
        </h1>
        <h2
          className="subtitle"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        ></h2>
      </div>
    </section>
  );
}
