import styled from "styled-components";
import { Heading } from "@/components";
import { ProjectCard } from "./components";

const Wrapper = styled.article`
  grid-area: projects;

  border-radius: 12px;
  background-size: cover;
  background-image: url("/backgrounds/projects.svg");

  padding: 16px;
`;

const Cards = styled.ul`
  display: flex;
  height: 432px;
  gap: 16px;

  margin-top: 12px;
`;

export const Projects = () => {
  return (
    <Wrapper>
      <Heading tag="h2">Projects</Heading>
      <Cards>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Cards>
    </Wrapper>
  );
};
