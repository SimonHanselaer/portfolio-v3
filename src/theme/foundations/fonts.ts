import { Bebas_Neue, Sen, Josefin_Sans } from "next/font/google";

const sen = Sen({ weight: ["400", "700"], subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export const fonts = {
  primary: bebasNeue,
  secondary: sen,
};

/**
 * primary: Bebas Neue <br />
 * secondary: Sen
 */
export type Fonts = typeof fonts;

export const fontSizes = {
  xs: 12 as const,
  s: 16 as const,
  m: 24 as const,
  l: 32 as const,
};
