import { Bebas_Neue, Sen } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";

const sen = Sen({ weight: ["400", "700"], subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

/**
 * primary: Bebas Neue <br />
 * secondary: Sen
 */
export type Fonts = {
  primary: NextFont;
  secondary: NextFont;
};

export const fonts: Fonts = {
  primary: bebasNeue,
  secondary: sen,
};

export const fontSizes = {
  xs: 12 as const,
  s: 16 as const,
  m: 24 as const,
  l: 32 as const,
};
