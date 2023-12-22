import styled from "styled-components";
import { Card as StyledCard } from "@/components";

export const Card = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing.m}px;
`;

export const YearContainer = styled.aside`
  position: absolute;
  top: ${({ theme }) => theme.spacing.s}px;
  right: ${({ theme }) => theme.spacing.s}px;
`;
