import styled from "styled-components";
import { getBackground } from "@/utils/styles";

export const Wrapper = styled.section`
  grid-area: skills;

  ${getBackground({ rotation: "west" })};

  padding: ${(p) => p.theme.spacing.m}px;

  @media (max-width: 1084px) {
    ${getBackground({ rotation: "north" })};
  }
`;

export const Cards = styled.ul`
  display: grid;
  grid-template-rows: repeat(5, 73.5px);
  grid-template-columns: repeat(5, 73.5px);

  gap: ${(p) => p.theme.spacing.s}px;
  margin-top: ${(p) => p.theme.spacing.s}px;

  @media (max-width: 540px) {
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(5, 1fr);
  }
`;
