import { DefaultTheme } from "styled-components";

import {
  colors,
  fonts,
  fontSizes,
  mediaQueries,
  spacing,
  boxShadows,
} from "./foundations";

export const theme: DefaultTheme = {
  fonts,
  colors,
  fontSizes,
  boxShadows,
  mediaQueries,
  spacing,
  space: spacing,
} as const;
