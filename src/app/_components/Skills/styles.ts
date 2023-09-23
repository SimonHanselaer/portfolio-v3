import styled from "styled-components";
import { getBackground } from "@/utils/styles";

export const Wrapper = styled.section`
  grid-area: skills;

  ${getBackground({ rotation: "west" })};

  padding: 16px;
`;

export const Cards = styled.ul`
  display: grid;
  grid-template-rows: repeat(5, 73.5px);
  grid-template-columns: repeat(5, 73.5px);

  gap: 12px;
  margin-top: 12px;
`;
