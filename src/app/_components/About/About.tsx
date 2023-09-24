import styled from "styled-components";

import { Heading, Subtitle, Text } from "@/components";
import { getBackground } from "@/utils/styles";
import { useData } from "@/utils/hooks";

const Section = styled.section`
  grid-area: about;

  padding: 24px;

  ${getBackground({ rotation: "east" })};

  @media (max-width: 1084px) {
    ${getBackground({ rotation: "east" })};
  }
`;

const ItemContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 344px);

  gap: 32px;

  margin-top: 16px;

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
            <StyledText tag="div">{item.text}</StyledText>
          </Item>
        ))}
      </ItemContainer>
    </Section>
  );
};
