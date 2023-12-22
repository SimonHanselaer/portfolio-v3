import styled from "styled-components";

import { Text } from "@/theme";
import { Card as StyledCard, Flex, Tag } from "@/components";

export const ItemContainer = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  gap: ${({ theme }) => theme.spacing.s}px;
`;

export const Card = styled(StyledCard)`
  padding: ${({ theme }) => theme.spacing.m}px;
`;

export const HeaderWrapper = styled(Flex)`
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs}px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.s}px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

  margin: ${({ theme }) => theme.spacing.s}px 0;

  max-width: 400px;
`;
