import styled, { css } from "styled-components";

import { icons } from "@/icons";
import { BaseColor, Spacing, theme } from "@/theme";

export type IconName = keyof typeof icons;

interface IIcon {
  name: IconName;
  size?: Spacing;
  color?: BaseColor;
}

const Wrapper = styled.div<{ color: BaseColor; size: Spacing }>`
  height: ${({ theme, size }) => theme.spacing[size]}px;
  width: ${({ theme, size }) => theme.spacing[size]}px;
  color: ${({ theme, color }) => theme.colors.base[color]};
`;

export const Icon = ({
  name,
  size = "m",
  color = "primary",
  ...rest
}: IIcon) => {
  return (
    <Wrapper color={color} size={size} {...rest}>
      {icons[name]({ size: theme.spacing[size] })}
    </Wrapper>
  );
};
