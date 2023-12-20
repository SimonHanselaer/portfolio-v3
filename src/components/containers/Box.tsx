import { ComponentType, HTMLAttributes, ReactNode } from "react";

import { isEmpty } from "lodash";
import styled from "styled-components";

import {
  SpaceProps,
  MaxWidthProps,
  MinWidthProps,
  MaxHeightProps,
  MinHeightProps,
  WidthProps,
  HeightProps,
  FlexProps,
  AlignSelfProps,
  TextAlignProps,
  OverflowProps,
  PositionProps,
  height,
  width,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth,
  space,
  flex,
  alignSelf,
  textAlign,
  overflow,
  position,
} from "styled-system";

export interface BoxProps
  extends SpaceProps,
    MaxWidthProps,
    MinWidthProps,
    MaxHeightProps,
    MinHeightProps,
    WidthProps,
    HeightProps,
    FlexProps,
    AlignSelfProps,
    TextAlignProps,
    OverflowProps,
    PositionProps,
    HTMLAttributes<HTMLDivElement> {
  children?: ReactNode | Iterable<ReactNode>;
}

export const Box: ComponentType<BoxProps> = styled.div.attrs(
  (props: BoxProps) => {
    const style = {
      ...height(props),
      ...width(props),
      ...maxHeight(props),
      ...minHeight(props),
      ...maxWidth(props),
      ...minWidth({ minWidth: props.minWidth || 0 }),
    };
    return isEmpty(style) ? {} : { style };
  }
)`
  ${space}
  ${flex}
  ${alignSelf}
  ${textAlign}
  ${overflow}
  ${position}
`;
