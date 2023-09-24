import styled from "styled-components";
import { getBackground } from "@/utils/styles";
import { Heading } from "@/components";

const Section = styled.section`
  grid-area: cv;

  padding: 24px;

  ${getBackground({ rotation: "south" })};

  @media (max-width: 1084px) {
    ${getBackground({ rotation: "east" })};
  }
`;

export const CV = () => {
  return (
    <Section>
      <Heading tag="h2">CV</Heading>
    </Section>
  );
};
