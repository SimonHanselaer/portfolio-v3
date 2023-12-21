import Link from "next/link";
import { Icon } from "@/components";
import { Section, ContactLinks } from "./styles";
import styled from "styled-components";

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.base.primary}90 !important;

  :hover {
    color: ${({ theme }) => theme.colors.base.primary} !important;
  }
`;

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
