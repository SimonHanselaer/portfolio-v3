import styled from "styled-components";
import { Tag } from "@/theme";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: ${(p) => p.theme.spacing.m}px;
  border-radius: ${(p) => p.theme.spacing.s}px;

  backdrop-filter: blur(20px);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  background: ${(p) => p.theme.colors.gradients.secondary};
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

export const TagWrapper = styled(Tag)<{ color: string }>`
  padding: ${(p) => p.theme.spacing.xxs}px;
  border-radius: 6px;

  background-color: ${(p) => p.color};
  color: ${(p) => p.theme.colors.base.white};

  white-space: nowrap;
`;
