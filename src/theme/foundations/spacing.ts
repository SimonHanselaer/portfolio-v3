export const spacing = {
  xxs: 4 as const,
  xs: 8 as const,
  s: 12 as const,
  m: 16 as const,
  l: 24 as const,
  xl: 32 as const,
  xxl: 64 as const,
};

export type Spacing = keyof typeof spacing;
