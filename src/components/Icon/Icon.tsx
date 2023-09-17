import styled from "styled-components";
import { icons } from "@/icons";

export type IconName = keyof typeof icons;

interface IIcon {
  name: IconName;
  size?: number;
  color?: string;
}

const Wrapper = styled.div<{ color?: string }>`
  ${(p) => (p.color ? `color: ${p.color};` : "")}
`;

export const Icon = ({ name, size, color }: IIcon) => {
  return <Wrapper color={color}>{icons[name]({ size })}</Wrapper>;
};
