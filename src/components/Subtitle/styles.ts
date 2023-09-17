import styled from "styled-components";
import { colors, sen } from "@/utils/foundations";

const subtitleStyles = {
  "font-family": `${sen.style.fontFamily}, sans-serif`,
  color: colors.base.primary,
  "font-size": "24px",
  "font-weight": "bold",
};

export const SubtitleH2 = styled.h2(() => subtitleStyles);
export const SubtitleH3 = styled.h3(() => subtitleStyles);
export const SubtitleDefault = styled.span(() => subtitleStyles);
