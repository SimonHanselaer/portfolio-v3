import styled from "styled-components";

import { icons } from "@/icons";
import { BaseColor } from "@/theme";

export type IconName = keyof typeof icons;

interface IIcon {
  name: IconName;
  size?: number;
  color?: BaseColor;
}

const Wrapper = styled.div<{ color?: BaseColor }>`
  ${({ theme, color }) => (color ? `color: ${theme.colors.base[color]}` : "")}
`;

export const Icon = ({ name, size, color }: IIcon) => {
  return <Wrapper color={color}>{icons[name]({ size })}</Wrapper>;
};
