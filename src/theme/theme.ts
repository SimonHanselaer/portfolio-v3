import { DefaultTheme } from "styled-components";
import { colors, fonts, fontSizes, spacing } from "./foundations";

export const theme: DefaultTheme = {
  colors,
  fonts,
  fontSizes,
  spacing,
} as const;
