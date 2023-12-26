import { range } from "lodash";

import { ISkill, ISkills } from "@/hooks";

import { Wrapper } from "./styles";
import { SkillCard } from "../SkillCard";

const getCards = (skills: ISkill[] | undefined) => {
  return range(5).map((v, index) => {
    if (skills?.[index]) {
      const skill = skills[index];
      return (
        <SkillCard
          key={`skill-${index}`}
          title={skill.title}
          img={skill.logo}
        />
      );
    }
    return <span key={index} />;
  });
};

export const Cards = ({ skills }: { skills: ISkills }) => {
  return (
    <Wrapper>
      {getCards(skills.basic)}
      {getCards(skills.framework)}
      {getCards(skills.backend)}
      {getCards(skills.design)}
      {getCards(skills.other)}
    </Wrapper>
  );
};
