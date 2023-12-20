"use client";

import { css, DefaultTheme } from "styled-components";

type IRotation = "north" | "east" | "south" | "west";

const getRotation = (rotation: IRotation) => {
  switch (rotation) {
    case "north":
      return Math.random() * (50 - 40) + 40;
    case "east":
      return Math.random() * (140 - 130) + 130;
    case "south":
      return Math.random() * (230 - 220) + 220;
    case "west":
      return Math.random() * (320 - 310) + 310;
  }
};

export const getBackground = ({
  rotation,
  theme,
}: {
  rotation: IRotation;
  theme: DefaultTheme;
}) => {
  return css`
    border-radius: 12px;
    background: linear-gradient(
      ${getRotation(rotation)}deg,
      ${theme.colors.gradient.primary.start} ${Math.random() * 15}%,
      ${theme.colors.gradient.primary.mid} ${Math.random() * (65 - 35) + 35}%,
      ${theme.colors.gradient.primary.end} ${Math.random() * (100 - 85) + 85}%
    );
  `;
};
