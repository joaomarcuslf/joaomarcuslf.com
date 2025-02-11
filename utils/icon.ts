import { SkillMetadata } from "@/types/skill";

const iconDict: {
  [key: string]: string;
} = {
  top: "fa-star",
  tech: "fa-code",
  "soft-skill": "fa-user-friends",
  "hard-skill": "fa-user-cog",
  deafult: "fa-file-lines",
}

export const getIcon = (skill: SkillMetadata) => {
  if (skill.top) return iconDict.top;

  return iconDict[skill.domain] || iconDict.deafult;
}
