import styled from "styled-components";
import { Tag as StyledTag } from "@/theme";
import { AccentColors } from "@/theme/foundations";

export const Tag = styled(StyledTag)<{ color: AccentColors }>`
  width: min-content;
  white-space: nowrap;
  padding: 0 ${({ theme }) => theme.spacing.xs}px;

  border-radius: 6px;
  color: ${({ theme }) => theme.colors.base.white};
  background-color: ${({ theme, color }) => theme.colors.accent[color]};
`;
