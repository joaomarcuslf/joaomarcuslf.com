import site from "@/site";

export default function DescriptionLines() {
  return (
    <section>
      <h2 className="underlined">Personal Description:</h2>
      {site.resume.descriptionLines.map((line, index) => (
        <p key={index} className="description-line indent-5">
          {line}
        </p>
      ))}
    </section>
  );
}
