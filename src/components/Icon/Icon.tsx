import styled from "styled-components";
import { SpaceProps } from "styled-system";

import { icons } from "@/icons";
import { Box } from "@/components";
import { BaseColors, Spacing, theme } from "@/theme";

export type IconName = keyof typeof icons;

type IIcon = SpaceProps & {
  name: IconName;
  size?: Spacing;
  color?: BaseColors;
  onClick?: () => void;
};

const Wrapper = styled.div<{
  color: BaseColors;
  size: Spacing;
  onClick?: () => void;
}>`
  height: ${({ theme, size }) => theme.spacing[size]}px;
  width: ${({ theme, size }) => theme.spacing[size]}px;
  color: ${({ theme, color }) => theme.colors.base[color]};
  cursor: ${({ onClick }) => (!!onClick ? "pointer" : "auto")};
`;

export const Icon = ({
  name,
  size = "m",
  color = "primary",
  onClick,
  ...rest
}: IIcon) => {
  return (
    <Box {...rest}>
      <Wrapper color={color} size={size} onClick={onClick} {...rest}>
        {icons[name]({ size: theme.spacing[size] })}
      </Wrapper>
    </Box>
  );
};
