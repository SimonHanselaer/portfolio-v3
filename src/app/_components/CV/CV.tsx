import styled from "styled-components";

import { Heading } from "@/theme";
import { getBackground } from "@/utils/styles";

const Section = styled.section`
  grid-area: cv;

  padding: ${(p) => p.theme.spacing.l}px;

  ${getBackground({ rotation: "south" })};

  @media (max-width: 1084px) {
    ${getBackground({ rotation: "east" })};
  }
`;

export const CV = () => {
  return (
    <Section>
      <Heading as="h2">CV</Heading>
    </Section>
  );
};
