import {
  flexWrap,
  FlexWrapProps,
  flexDirection,
  FlexDirectionProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
} from "styled-system";
import styled from "styled-components";

import { spacing } from "@/theme";

import { Box, BoxProps } from "./Box";

export interface FlexProps
  extends BoxProps,
    FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps {
  space?: boolean;
  gap?: keyof typeof spacing;
}

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${({ theme, gap }) => (gap ? `gap: ${theme.spacing[gap]}px;` : "")}

  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`;
