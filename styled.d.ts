import "styled-components";
import {
  Colors,
  Fonts,
  fontSizes,
  spacing,
  mediaQueries,
  boxShadows,
} from "@/theme/foundations";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
    fontSizes: typeof fontSizes;
    spacing: typeof spacing;
    mediaQueries: typeof mediaQueries;
    boxShadows: typeof boxShadows;
  }
}
