import { DefaultTheme } from "styled-components";
import { colors, fonts, fontSizes, mediaQueries, spacing } from "./foundations";
import { boxShadows } from "@/theme/foundations/boxShadows";

export const theme: DefaultTheme = {
  fonts,
  colors,
  fontSizes,
  boxShadows,
  mediaQueries,
  spacing,
  space: spacing,
} as const;
