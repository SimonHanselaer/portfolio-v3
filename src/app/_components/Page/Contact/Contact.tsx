import Link from "next/link";

import { Section, ContactLinks, StyledIcon } from "./styles";

export const Contact = () => {
  return (
    <Section>
      <ContactLinks>
        <Link href="https://www.linkedin.com/in/simon-hanselaer-09863b194/">
          <StyledIcon name="LinkedIn" size="l" />
        </Link>
        <Link href="https://github.com/SimonHanselaer">
          <StyledIcon name="Github" size="l" />
        </Link>
        <Link href="mailto:simon.hanselaer@hotmail.com">
          <StyledIcon name="Mail" size="l" />
        </Link>
      </ContactLinks>
    </Section>
  );
};
