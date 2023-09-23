import { range } from "lodash";

import { Heading } from "@/components";
import { ISkill, useData } from "@/utils/hooks";

import { SkillCard } from "./components";
import { Wrapper, Cards } from "./styles";

const getCards = (skills: ISkill[]) => {
  return range(5).map((v, index) => {
    if (skills[index]) {
      const skill = skills[index];
      return (
        <SkillCard key={skill.title} title={skill.title} img={skill.logo} />
      );
    }
    return <span key={index} />;
  });
};

export const Skills = () => {
  const { skills, isLoading, isError } = useData("skill");

  return (
    <Wrapper>
      <Heading tag="h2">Skills</Heading>
      <Cards>
        {getCards(skills.basic)}
        {getCards(skills.framework)}
        {getCards(skills.backend)}
        {getCards(skills.design)}
        {getCards(skills.other)}
      </Cards>
    </Wrapper>
  );
};
