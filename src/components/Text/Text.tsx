import React from "react";
import styled from "styled-components";

import { colors, sen } from "@/utils/foundations";

export type IHeading = {
  children: React.ReactNode;
};

const TextComponent = styled.p`
  font-family: ${sen.style.fontFamily}, sans-serif;
  color: ${colors.base.primary};
  font-size: 16px;
`;

export const Text = ({ children, ...rest }: IHeading) => {
  return <TextComponent {...rest}>{children}</TextComponent>;
};
