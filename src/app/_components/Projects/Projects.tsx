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
`;

const Cards = styled.ul`
  display: flex;
  height: 432px;
  gap: 16px;

  margin-top: 12px;

  overflow: auto;
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
