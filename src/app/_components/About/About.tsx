import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { sortBy } from "lodash";
import styled from "styled-components";

import { contentful } from "@/utils";
import { Heading, Text } from "@/components";
import { getBackground } from "@/utils/styles";
import { useData } from "@/utils/hooks";

const Section = styled.section`
  grid-area: about;

  padding: 24px;

  ${getBackground({ rotation: "east" })};
`;

const ItemContainer = styled.ul`
  display: flex;
  gap: 16px;
`;

const Item = styled.li`
  border-radius: 12px;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  background: linear-gradient(
    108.84deg,
    rgba(255, 255, 255, 0.4) 3.96%,
    rgba(255, 255, 255, 0.1) 95.1%
  );

  padding: 16px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;

  gap: 12px;
`;

export const About = () => {
  const { items, isLoading, isError } = useData("information");

  return (
    <Section>
      <Heading tag="h2">About Me</Heading>
      <ItemContainer>
        {items?.map((item, index) => {
          const content = (
            <Item key={`information-item-${index}`}>
              <Image src={item.icon} alt={item.title} height={32} width={32} />
              <Text>{item.title}</Text>
            </Item>
          );
          if (item.link)
            return (
              <Link key={`information-link-${index}`} href={item.link}>
                {content}
              </Link>
            );
          return content;
        })}
      </ItemContainer>
    </Section>
  );
};
