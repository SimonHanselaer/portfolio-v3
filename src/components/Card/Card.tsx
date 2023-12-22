import styled, { css } from "styled-components";

export const Card = styled.div<{ hoverEffect?: boolean }>`
  backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.spacing.s}px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  background: ${({ theme }) => theme.colors.gradient.secondary};

  &:hover {
    ${({ hoverEffect, theme }) =>
      hoverEffect
        ? css`
            backdrop-filter: contrast(0.9);
            box-shadow: ${theme.boxShadows.secondary};
          `
        : ""}
  }
`;
