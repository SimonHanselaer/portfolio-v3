import styled from "styled-components";

import { useData } from "@/utils/hooks";
import { getBackground } from "@/utils/styles";
import { Heading, Subtitle, Text } from "@/theme";

const Section = styled.section`
  grid-area: about;

  padding: ${(p) => p.theme.spacing.l}px;

  ${getBackground({ rotation: "east" })};
`;

const ItemContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 344px);

  gap: ${(p) => p.theme.spacing.xl}px;

  margin-top: ${(p) => p.theme.spacing.m}px;

  @media (max-width: 1680px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1330px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Item = styled.li`
  max-width: 344px;

  @media (max-width: 1680px) {
    max-width: 400px;
  }
`;

const StyledText = styled(Text)`
  margin-top: ${(p) => p.theme.spacing.s}px;

  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.m}px;
`;

export const About = () => {
  const { items, isLoading, isError } = useData("information");

  return (
    <Section>
      <Heading as="h2">About Me</Heading>
      <ItemContainer>
        {items?.map((item, index) => (
          <Item key={`information-item-${index}`}>
            <Subtitle>{item.title}</Subtitle>
            <StyledText as="div">{item.text}</StyledText>
          </Item>
        ))}
      </ItemContainer>
    </Section>
  );
};
