"use client";

import styled from "styled-components";

export const Heading = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary.style.fontFamily},
    sans-serif;
  color: ${({ theme }) => theme.colors.base.primary};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
`;

export const Subtitle = styled.span<{ mode?: "primary" | "secondary" }>`
  font-family: ${({ theme }) => theme.fonts.secondary.style.fontFamily},
    sans-serif;
  color: ${({ theme }) => theme.colors.base.primary};
  font-size: ${({ theme, mode }) =>
    mode === "secondary" ? theme.fontSizes.s : theme.fontSizes.m}px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary.style.fontFamily},
    sans-serif;
  color: ${({ theme }) => theme.colors.base.primary};
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  line-height: 20px;
`;

export const Tag = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
`;
