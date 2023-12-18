const base = {
  black: "#000000",
  white: "#ffffff",

  primary: "#001D3D",
};

export const colors = {
  base,
};

type BaseColors = keyof typeof base;

export type Colors = {
  base: { [key in BaseColors]: string };
};
