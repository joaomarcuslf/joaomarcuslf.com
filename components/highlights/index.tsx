import ExpandHighlight from "./components/expand-highlights";

interface HighlightProps<T> {
  items: T[];
  children: (item: T) => React.ReactNode;
  section: string;
  theme: "light" | "dark";
  sectionType?: string;
}

export default function Highlight<T>({
  items,
  children,
  section,
  theme,
  sectionType = section,
}: HighlightProps<T>) {
  const captilize = (str: string) =>
    str?.charAt(0)?.toUpperCase() + str?.slice(1);

  return (
    <section
      id={section}
      className={`hero ${sectionType}s-section is-${theme}`}
    >
      <div className="hero-body">
        <h2
          className={`${sectionType}s-section-title`}
        >{`Highlighted ${captilize(section)}s`}</h2>

        <ExpandHighlight
          section={section}
          sectionType={sectionType}
        >
          {items.map((item) => children(item))}
        </ExpandHighlight>
      </div>
    </section>
  );
}
