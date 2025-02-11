import Highlight from "@/components/highlights";
import SkillView from "@/components/view/skill";
import { SkillMetadata } from "@/types/skill";

export default function HighlightedSkills({ skills }: { skills: SkillMetadata[] }) {
  return (
    <Highlight items={skills} section="skill" theme="dark">
      {(skill) => <SkillView key={skill.key} skill={skill} />}
    </Highlight>
  );
}
