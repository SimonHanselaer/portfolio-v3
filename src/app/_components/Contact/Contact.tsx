import styled from "styled-components";
import { getBackground } from "@/utils/styles";
import { Heading, Text } from "@/components";

const Section = styled.section`
  grid-area: contact;

  padding: 24px;

  ${getBackground({ rotation: "west" })};
`;

export const Contact = () => {
  return (
    <Section>
      <Heading tag="h2">Contact</Heading>
      <Text>simon.hanselaer@hotmail.com</Text>
      <Text>Linked In</Text>
      <Text>Github</Text>
    </Section>
  );
};
