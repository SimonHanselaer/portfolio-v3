import styled from "styled-components";

import { Heading, Subtitle, Text } from "@/components";
import { getBackground } from "@/utils/styles";
import { useData } from "@/utils/hooks";

const Section = styled.section`
  grid-area: about;

  padding: 24px;

  ${getBackground({ rotation: "east" })};
`;

const ItemContainer = styled.ul`
  display: flex;
  justify-content: flex-start;

  gap: 32px;

  margin-top: 16px;
`;

const Item = styled.li`
  width: 33%;
  max-width: 344px;
`;

const StyledText = styled(Text)`
  margin-top: 12px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const About = () => {
  const { items, isLoading, isError } = useData("information");

  return (
    <Section>
      <Heading tag="h2">About Me</Heading>
      <ItemContainer>
        {items?.map((item, index) => (
          <Item key={`information-item-${index}`}>
            <Subtitle>{item.title}</Subtitle>
            <StyledText>{item.text}</StyledText>
          </Item>
        ))}
      </ItemContainer>
    </Section>
  );
};
