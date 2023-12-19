import { Heading } from "@/theme";
import { useData } from "@/utils/hooks";

import { Wrapper, Cards } from "./styles";
import { ProjectCard } from "./components";

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
