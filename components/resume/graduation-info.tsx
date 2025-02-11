import site from "@/site";

export default function GraduationInfo() {
  return (
    <section>
      <h2 className="underlined">Graduation:</h2>

      <div className="columns">
        {site.resume.graduations.map((graduation, index) => (
          <div key={index} className="column">
            <p className="capitalized pl-2">
              <strong>{graduation.title}</strong>
              <span className="underlined small pl-2">
                (
                {graduation.active
                  ? `started at ${graduation.year}`
                  : `ended at ${graduation.year}`}
                )
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
