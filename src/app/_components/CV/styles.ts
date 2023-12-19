import styled from "styled-components";
import { getBackground } from "@/utils/styles";

export const Section = styled.section`
  grid-area: cv;

  padding: ${({ theme }) => theme.spacing.l}px;

  ${({ theme }) => getBackground({ rotation: "south", theme })};

  @media (max-width: ${(p) => p.theme.mediaQueries.m}px) {
    ${({ theme }) => getBackground({ rotation: "east", theme })};
  }
`;
