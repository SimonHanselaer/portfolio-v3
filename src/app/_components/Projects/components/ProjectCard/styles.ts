import styled from "styled-components";
import { Tag } from "@/theme";
import { Card as StyledCard } from "@/components";

export const Card = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: ${(p) => p.theme.spacing.m}px;
`;

export const TagsContainer = styled.ul`
  position: absolute;
  top: ${(p) => p.theme.spacing.s}px;
  right: ${(p) => p.theme.spacing.s}px;

  display: flex;
  flex-wrap: wrap;
  max-width: 128px;
  justify-content: flex-end;

  gap: ${(p) => p.theme.spacing.xxs}px;
`;
