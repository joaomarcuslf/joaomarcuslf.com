import site from "@/site";

export default function LanguageInfo() {
  return (
    <section>
      <h2 className="underlined">Languages:</h2>
      <div className="columns pl-5">
        {site.resume.languages.map((language, index) => (
          <div key={index} className="column">
            <p className="capitalized pl-2">
              <strong>{language.name}</strong>
              <span className="underlined small pl-2">({language.level})</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
