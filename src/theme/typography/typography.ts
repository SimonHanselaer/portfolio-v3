"use client";

import styled from "styled-components";

export const Heading = styled.span`
  font-family: ${(p) => p.theme.fonts.primary.style.fontFamily}, sans-serif;
  color: ${(p) => p.theme.colors.base.primary};
  font-size: ${(p) => p.theme.fontSizes.l}px;
`;

export const Subtitle = styled.span`
  font-family: ${(p) => p.theme.fonts.secondary.style.fontFamily}, sans-serif;
  color: ${(p) => p.theme.colors.base.primary};
  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-family: ${(p) => p.theme.fonts.secondary.style.fontFamily}, sans-serif;
  color: ${(p) => p.theme.colors.base.primary};
  font-size: ${(p) => p.theme.fontSizes.s}px;
  line-height: 18px;
`;

export const Tag = styled(Text)`
  font-size: ${(p) => p.theme.fontSizes.xs}px;
`;
