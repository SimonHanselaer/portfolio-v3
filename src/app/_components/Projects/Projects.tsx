import useSWR from "swr";
import styled from "styled-components";

import { contentful } from "@/utils";
import { Heading } from "@/components";
import { getBackground } from "@/utils/styles";

import { ProjectCard } from "./components";

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

type IProjects = { title: string; description: string }[];

const fetchProjects = async (): Promise<IProjects> => {
  console.log("fetch projects");
  const entries = await contentful.getEntries({ content_type: "project" });
  return entries.items.map((item) => ({
    title: item.fields.title,
    description: item.fields.description,
  })) as IProjects;
};

export const Projects = () => {
  const { data } = useSWR("project", fetchProjects);
  console.log(data);

  return (
    <Wrapper>
      <Heading tag="h2">Projects</Heading>
      <Cards>
        {data?.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </Cards>
    </Wrapper>
  );
};
