const base = {
  black: "#000000",
  white: "#ffffff",

  primary: "#001D3D",
};

const accent = {
  primary: "#F24E1E",
  secondary: "#A259FF",
  tertiary: "#0ACF83",
};

const gradient = {
  primary: {
    start: "#d3dae2",
    mid: "#f5f6f5",
    end: "#f8eecc",
  },
  secondary:
    "linear-gradient(108.84deg, rgba(255, 255, 255, 0.4) 3.96%, rgba(255, 255, 255, 0.1) 95.1%)",
};

export const colors: Colors = {
  base,
  accent,
  gradient,
};

export type BaseColor = keyof typeof base;
export type GradientColors = keyof typeof gradient;
export type AccentColors = keyof typeof accent;

export type Colors = {
  base: typeof base;
  accent: typeof accent;
  gradient: typeof gradient;
};
