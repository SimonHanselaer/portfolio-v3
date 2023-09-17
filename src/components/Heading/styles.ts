import styled from "styled-components";
import { colors, bebasNeue } from "@/utils/foundations";

const headingStyles = {
  "font-family": `${bebasNeue.style.fontFamily}, sans-serif`,
  color: colors.base.primary,
  "font-size": "32px",
};

export const Header1 = styled.h1(() => headingStyles);
export const Header2 = styled.h2(() => headingStyles);
export const Header3 = styled.h3(() => headingStyles);
export const HeaderDefault = styled.span(() => headingStyles);
