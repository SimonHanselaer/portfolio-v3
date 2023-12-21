import styled from "styled-components";
import { getBackground } from "@/utils";

export const Section = styled.section`
  grid-area: experience;

  padding: ${({ theme }) => theme.spacing.l}px;

  ${({ theme }) => getBackground({ rotation: "east", theme })};
`;

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl}px;

  margin-top: ${({ theme }) => theme.spacing.m}px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.m}px) {
    grid-template-columns: 1fr;

    grid-template-rows: repeat(2, auto);
  }
`;
