import styled from "styled-components";
import { getBackground } from "@/utils/styles";
import { Heading, Text } from "@/components";

const Section = styled.section`
  grid-area: about;

  padding: 24px;

  ${getBackground({ rotation: "east" })};
`;
export const About = () => {
  return (
    <Section>
      <Heading tag="h2">About Me</Heading>
      <Text>Living in Ghent, Belgium</Text>
      <Text>Graduated from Devine (Digital Design & Development) - 2020</Text>
      <Text>Erasmus Internship at BrikkApp/Coding Bootcamp (Prague - CZ)</Text>
      <Text>Working for OQTON</Text>
    </Section>
  );
};
