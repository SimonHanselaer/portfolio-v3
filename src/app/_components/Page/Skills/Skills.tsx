import { useMemo } from "react";

import { Heading } from "@/theme";
import { useData } from "@/hooks";
import { Error, Loading } from "@/components";

import { Wrapper } from "./styles";
import { Cards } from "./components";

const Content = () => {
  const { skills, isLoading, isError } = useData("skill");

  if (isError) return <Error>Something went wrong!</Error>;
  if (isLoading) return <Loading />;
  return <Cards skills={skills} />;
};

export const Skills = () => {
  return (
    <Wrapper>
      <Heading as="h2">Toolbox</Heading>
      <Content />
    </Wrapper>
  );
};
