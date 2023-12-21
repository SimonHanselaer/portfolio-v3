import { useData } from "@/hooks";
import { Subtitle } from "@/theme";
import { Flex, Tag } from "@/components";

import { Card, ItemContainer, PeriodWrapper, StyledText } from "./styles";

export const Overview = () => {
  const { items, isLoading, isError } = useData("experience");

  return (
    <ItemContainer>
      {items?.map((item, index) => (
        <Card key={`experience-${index}`}>
          <PeriodWrapper color="primary">{item.period}</PeriodWrapper>
          <Flex alignItems="center" gap="xs">
            <Subtitle as="h3">{item.title}</Subtitle>
            {item.internship && <Tag color="tertiary">Internship</Tag>}
          </Flex>
          <StyledText as="div">{item.description}</StyledText>
          <Flex gap="xxs" mt="m" maxWidth={240} flexWrap="wrap" as="ul">
            {item.tags.map((tag) => (
              <Tag key={`tag-${tag}`} color="secondary" as="li">
                {tag}
              </Tag>
            ))}
          </Flex>
        </Card>
      ))}
    </ItemContainer>
  );
};
