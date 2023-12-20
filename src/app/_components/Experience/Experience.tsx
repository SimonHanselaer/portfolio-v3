import { useData } from "@/hooks";
import { Flex, Tag } from "@/components";
import { Heading, Subtitle } from "@/theme";

import {
  Section,
  ItemContainer,
  Card,
  StyledText,
  PeriodWrapper,
} from "./styles";

export const Experience = () => {
  const { items, isLoading, isError } = useData("experience");

  return (
    <Section>
      <Heading as="h2">Experience</Heading>
      <ItemContainer>
        {items?.map((item, index) => (
          <Card key={`experience-${index}`}>
            <PeriodWrapper color="primary">{item.period}</PeriodWrapper>
            <Flex alignItems="center" gap="xs">
              <Subtitle mode="secondary" as="h3">
                {item.title}
              </Subtitle>
              {item.internship && <Tag color="tertiary">Internship</Tag>}
            </Flex>
            <StyledText as="div">{item.description}</StyledText>
            <Flex gap="xxs" mt="xs" maxWidth={240} flexWrap="wrap" as="ul">
              {item.tags.map((tag) => (
                <Tag key={`tag-${tag}`} color="secondary" as="li">
                  {tag}
                </Tag>
              ))}
            </Flex>
          </Card>
        ))}
      </ItemContainer>
    </Section>
  );
};
