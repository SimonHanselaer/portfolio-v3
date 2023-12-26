import styled from "styled-components";
import { getBackground } from "@/utils";

export const Wrapper = styled.section`
  grid-area: skills;

  display: flex;
  flex-direction: column;

  ${({ theme }) => getBackground({ rotation: "west", theme })};

  padding: ${({ theme }) => theme.spacing.m}px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.m}px) {
    ${({ theme }) => getBackground({ rotation: "north", theme })};
  }
`;
