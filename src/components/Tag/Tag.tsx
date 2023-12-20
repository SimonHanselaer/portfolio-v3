import styled from "styled-components";
import { AccentColors, Tag as StyledTag } from "@/theme";

export const Tag = styled(StyledTag)<{ color: AccentColors }>`
  width: min-content;
  white-space: nowrap;
  padding: 0 ${({ theme }) => theme.spacing.xs}px;

  border-radius: 6px;
  color: ${({ theme }) => theme.colors.base.white};
  background-color: ${({ theme, color }) => theme.colors.accent[color]};
`;
