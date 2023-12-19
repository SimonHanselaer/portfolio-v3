const base = {
  black: "#000000",
  white: "#ffffff",

  primary: "#001D3D",
};

const gradients = {
  primary: {
    start: "#d3dae2",
    mid: "#f5f6f5",
    end: "#f8eecc",
  },
  secondary:
    "linear-gradient(108.84deg, rgba(255, 255, 255, 0.4) 3.96%, rgba(255, 255, 255, 0.1) 95.1%)",
};

export const colors = {
  base,
  gradients,
};

type BaseColors = keyof typeof base;
type GradientColors = keyof typeof gradients;

export type Colors = {
  base: { [key in BaseColors]: string };
  gradients: typeof gradients;
};
