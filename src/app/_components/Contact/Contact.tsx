import Link from "next/link";
import Image from "next/image";

import { Heading } from "@/theme";
import { useData } from "@/utils/hooks";

import { Section, ContactLinks, ContactLink } from "./styles";

export const Contact = () => {
  const { links, isLoading, isError } = useData("contact");

  return (
    <Section>
      <Heading as="h2">Contact</Heading>
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
