import useSWR from "swr";
import styled from "styled-components";

import { contentful } from "@/utils";
import { Heading } from "@/components";
import { getBackground } from "@/utils/styles";

import { ProjectCard } from "./components";
import { useData } from "@/utils/hooks";

const Wrapper = styled.section`
  grid-area: projects;

  ${getBackground({ rotation: "east" })}

  padding: 16px;

  @media (max-width: 1084px) {
    ${getBackground({ rotation: "east" })};
  }
`;

const Cards = styled.ul`
  margin-top: 16px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, auto));
  gap: 16px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(248px, auto));
  }
`;

export const Projects = () => {
  const { projects, isLoading, isError } = useData("project");

  return (
    <Wrapper>
      <Heading tag="h2">Projects</Heading>
      <Cards>
        {projects?.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </Cards>
    </Wrapper>
  );
};
