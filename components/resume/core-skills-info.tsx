import site from "@/site";

export default function CoreSkillsInfo() {
  return (
    <section>
      <h2 className="underlined">Core Skills:</h2>
      <div className="columns pl-5">
        {site.resume.coreSkills.map((skill, index) => (
          <div key={index} className="column is-6">
            <p className="capitalized pl-2">
              <strong>{skill}</strong>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
