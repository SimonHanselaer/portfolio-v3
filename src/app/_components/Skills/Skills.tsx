import useSWR from "swr";

import { contentful } from "@/utils";
import { Heading } from "@/components";

import { SkillCard } from "./components";
import { Wrapper, Cards } from "./styles";
import { useData } from "@/utils/hooks";

export const Skills = () => {
  const { skills, isLoading, isError } = useData("skill");

  return (
    <Wrapper>
      <Heading tag="h2">Skills</Heading>
      <Cards>
        {skills?.map((skill) => (
          <SkillCard key={skill.title} title={skill.title} img={skill.logo} />
        ))}
      </Cards>
    </Wrapper>
  );
};
