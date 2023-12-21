import styled from "styled-components";

import { Card } from "@/components";
import { getBackground } from "@/utils";

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
