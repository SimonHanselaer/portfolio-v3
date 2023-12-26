import { useMemo } from "react";

import { Heading } from "@/theme";
import { useData } from "@/hooks";
import { Error, Loading } from "@/components";

import { Wrapper, Cards } from "./styles";
import { ProjectCard } from "./components";

const Content = () => {
  const { projects, isLoading, isError } = useData("project");

  if (isError) return <Error>Something went wrong!</Error>;
  if (isLoading) return <Loading />;
  return (
    <Cards>
      {projects?.map((project, index) => (
        <ProjectCard key={`project-${index}`} {...project} />
      ))}
    </Cards>
  );
};

export const Projects = () => {
  return (
    <Wrapper>
      <Heading as="h2">Projects</Heading>
      <Content />
    </Wrapper>
  );
};
