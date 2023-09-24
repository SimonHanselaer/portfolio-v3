import { sortBy } from "lodash";
import styled from "styled-components";

import { getBackground } from "@/utils/styles";
import { Heading, Text } from "@/components";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { useData } from "@/utils/hooks";

const Section = styled.section`
  grid-area: contact;

  padding: 24px;

  ${getBackground({ rotation: "west" })};

  @media (max-width: 1084px) {
    ${getBackground({ rotation: "north" })};
  }
`;

const ContactLinks = styled.ul`
  display: grid;
  grid-template-rows: repeat(1, 73.5px);
  grid-template-columns: repeat(3, 73.5px);

  gap: 12px;
  margin-top: 12px;
`;

const ContactLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  border-radius: 12px;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  background: linear-gradient(
    108.84deg,
    rgba(255, 255, 255, 0.4) 3.96%,
    rgba(255, 255, 255, 0.1) 95.1%
  );
`;

export const Contact = () => {
  const { links, isLoading, isError } = useData("contact");

  return (
    <Section>
      <Heading tag="h2">Contact</Heading>
      <ContactLinks>
        {links?.map((item, index) => (
          <Link key={`link-${index}`} href={item.link}>
            <ContactLink>
              <Image src={item.icon} alt={item.link} height={32} width={32} />
            </ContactLink>
          </Link>
        ))}
      </ContactLinks>
    </Section>
  );
};
