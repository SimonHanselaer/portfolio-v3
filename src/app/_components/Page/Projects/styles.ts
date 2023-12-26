import styled from "styled-components";
import { getBackground } from "@/utils";

export const Wrapper = styled.section`
  grid-area: projects;

  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => theme.spacing.m}px;

  min-height: 352px;

  ${({ theme }) => getBackground({ rotation: "east", theme })};

  @media (max-width: ${({ theme }) => theme.mediaQueries.m}px) {
    ${({ theme }) => getBackground({ rotation: "east", theme })};
  }
`;

export const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, auto));
  gap: ${({ theme }) => theme.spacing.m}px;

  margin-top: ${({ theme }) => theme.spacing.m}px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.xs}px) {
    grid-template-columns: repeat(auto-fill, minmax(248px, auto));
  }
`;
