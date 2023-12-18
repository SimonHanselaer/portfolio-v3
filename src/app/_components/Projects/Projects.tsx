import styled from "styled-components";

import { Heading } from "@/theme";
import { useData } from "@/utils/hooks";
import { getBackground } from "@/utils/styles";

import { ProjectCard } from "./components";

const Wrapper = styled.section`
  grid-area: projects;

  ${getBackground({ rotation: "east" })}

  padding: ${(p) => p.theme.spacing.m}px;

  @media (max-width: 1084px) {
    ${getBackground({ rotation: "east" })};
  }
`;

const Cards = styled.ul`
  margin-top: ${(p) => p.theme.spacing.m}px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, auto));
  gap: ${(p) => p.theme.spacing.m}px;

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(248px, auto));
  }
`;

export const Projects = () => {
  const { projects, isLoading, isError } = useData("project");

  return (
    <Wrapper>
      <Heading as="h2">Projects</Heading>
      <Cards>
        {projects?.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </Cards>
    </Wrapper>
  );
};
