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
`;

const ContactLinks = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const ContactLink = styled.li`
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
