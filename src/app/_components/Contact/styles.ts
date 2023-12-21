import styled from "styled-components";

import { Icon } from "@/components";

export const Section = styled.section`
  grid-area: contact;

  display: flex;
  justify-content: flex-end;

  position: relative;
`;

export const ContactLinks = styled.ul`
  align-self: flex-end;

  position: sticky;
  bottom: ${({ theme }) => theme.spacing.m}px;

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.m}px;
`;

export const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.base.primary}90 !important;

  :hover {
    color: ${({ theme }) => theme.colors.base.primary} !important;
  }
`;
