import { useData } from "@/utils/hooks";
import { Heading, Subtitle } from "@/theme";

import { Section, ItemContainer, Item, StyledText } from "./styles";

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
