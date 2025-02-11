import site from "@/site";

function calculateAge(birthDateStr: string): number {
  const [year, month, day] = birthDateStr.split("-").map(Number);
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let age = today.getFullYear() - birthDate.getFullYear();

  const isBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!isBirthdayPassed) {
    age--;
  }

  return age;
}

export default function PersonalInfo() {
  return (
    <section>
      <h2 className="underlined">Personal Info:</h2>

      {site.resume.personalInfo.map((info, index) => (
        <p key={index} className="pl-1">
          <strong className="pr-1">{info.title}:</strong>
          {info.type === "birthday" ? `${calculateAge(info.content)} years old.` : info.content}
        </p>
      ))}
    </section>
  );
}
