import styled from "styled-components";

import { Text } from "@/theme";
import { getBackground } from "@/utils";
import { Card as StyledCard, Tag } from "@/components";

export const Section = styled.section`
  grid-area: about;

  padding: ${({ theme }) => theme.spacing.l}px;

  ${({ theme }) => getBackground({ rotation: "east", theme })};
`;

export const ItemContainer = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: ${({ theme }) => theme.spacing.s}px;

  margin-top: ${({ theme }) => theme.spacing.m}px;

  max-width: 448px;
`;

export const Card = styled(StyledCard)`
  padding: ${({ theme }) => theme.spacing.m}px;
`;

export const PeriodWrapper = styled(Tag)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.s}px;
  right: ${({ theme }) => theme.spacing.s}px;
`;

export const StyledText = styled(Text)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m}px;

  margin-top: ${({ theme }) => theme.spacing.s}px;
`;
