import { Heading } from "@/theme";

import { Section } from "./styles";
import { Overview, Resume } from "./components";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl}px;

  margin-top: ${({ theme }) => theme.spacing.m}px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.m}px) {
    grid-template-columns: 1fr;

    grid-template-rows: repeat(2, auto);
  }
`;

export const Experience = () => {
  return (
    <Section>
      <Heading as="h2">Experience</Heading>
      <Wrapper>
        <Overview />
        <Resume />
      </Wrapper>
    </Section>
  );
};
