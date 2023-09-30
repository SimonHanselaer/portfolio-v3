import React from "react";
import styled from "styled-components";

import { colors, sen } from "@/utils/foundations";
import {
  Header1,
  Header2,
  Header3,
  HeaderDefault,
} from "@/components/Heading/styles";

export type IText = {
  children: React.ReactNode;
  tag?: "div" | "p";
};

const textStyles = {
  "font-family": `${sen.style.fontFamily}, sans-serif;`,
  color: colors.base.primary,
  "font-size": "16px",
  "line-height": "18px",
};

const Div = styled.div(() => textStyles);
const P = styled.p(() => textStyles);

export const Text = ({ children, tag, ...rest }: IText) => {
  switch (tag) {
    case "div":
      return <Div {...rest}>{children}</Div>;
    case "p":
    default:
      return <P {...rest}>{children}</P>;
  }
};
