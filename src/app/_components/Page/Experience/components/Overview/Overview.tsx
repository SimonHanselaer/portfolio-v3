import { useData } from "@/hooks";
import { Subtitle } from "@/theme";
import { Flex, Tag } from "@/components";

import {
  Card,
  ItemContainer,
  HeaderWrapper,
  PeriodWrapper,
  StyledText,
} from "./styles";
import Link from "next/link";

export const Overview = () => {
  const { items, isLoading, isError } = useData("experience");

  return (
    <ItemContainer>
      {items?.map((item, index) => (
        <Link key={`experience-${index}`} href={item.link} target="_blank">
          <Card hoverEffect>
            <PeriodWrapper color="primary">{item.period}</PeriodWrapper>
            <HeaderWrapper>
              <Subtitle as="h3">{item.title}</Subtitle>
              {item.internship && <Tag color="tertiary">Internship</Tag>}
            </HeaderWrapper>
            <StyledText as="div">{item.description}</StyledText>
            <Flex gap="xxs" mt="m" maxWidth={240} flexWrap="wrap" as="ul">
              {item.tags.map((tag, index) => (
                <Tag key={`tag-${index}`} color="secondary" as="li">
                  {tag}
                </Tag>
              ))}
            </Flex>
          </Card>
        </Link>
      ))}
    </ItemContainer>
  );
};