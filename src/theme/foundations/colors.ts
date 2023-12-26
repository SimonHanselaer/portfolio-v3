const accent = {
  primary: "#F24E1E",
  secondary: "#A259FF",
  tertiary: "#0ACF83",
};

const defaults = {
  base: {
    white: "#FFFFFF",
    error: "#ED2939",
  },
};

export namespace light {
  const base = {
    ...defaults.base,
    primary: "#001D3D",
    secondary: "#FFFFFF",
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
    gradient,
    accent,
  };
}

export namespace dark {
  const base = {
    ...defaults.base,
    primary: "#A9D6E5",
    secondary: "#012A4A",
  };

  const gradient = {
    primary: {
      start: "#013A63",
      mid: "#01497C",
      end: "#014F86",
    },
    secondary:
      "linear-gradient(108.84deg, rgba(0, 0, 0, 0.4) 3.96%, rgba(0, 0, 0, 0.2) 95.1%)",
  };

  export const colors: Colors = {
    base,
    gradient,
    accent,
  };
}

export type BaseColors = "primary" | "secondary" | "white" | "error";
export type GradientColors = "primary" | "secondary";
export type AccentColors = keyof typeof accent;

export type Colors = {
  base: { [key in BaseColors]: string };
  accent: { [key in AccentColors]: string };
  gradient: {
    primary: { start: string; mid: string; end: string };
    secondary: string;
  };
};
