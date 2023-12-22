import styled from "styled-components";
import { getBackground } from "@/utils";

export const Wrapper = styled.section`
  grid-area: skills;

  ${({ theme }) => getBackground({ rotation: "west", theme })};

  padding: ${({ theme }) => theme.spacing.m}px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.m}px) {
    ${({ theme }) => getBackground({ rotation: "north", theme })};
  }
`;

export const Cards = styled.ul`
  display: grid;
  grid-template-rows: repeat(5, 73.5px);
  grid-template-columns: repeat(5, 73.5px);
  gap: ${({ theme }) => theme.spacing.s}px;

  margin-top: ${({ theme }) => theme.spacing.s}px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.s}px) {
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(5, 1fr);
  }
`;
