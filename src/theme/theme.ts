import { DefaultTheme } from "styled-components";

import {
  fonts,
  fontSizes,
  mediaQueries,
  spacing,
  boxShadows,
} from "./foundations";

export const theme: Omit<DefaultTheme, "colors"> = {
  fonts,
  fontSizes,
  boxShadows,
  mediaQueries,
  spacing,
  space: spacing,
} as const;
