import styled from "styled-components";
import { getBackground } from "@/utils/styles";

export const Wrapper = styled.section`
  grid-area: skills;

  ${getBackground({ rotation: "west" })};

  padding: 16px;
`;

export const Cards = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 128px);
  grid-template-columns: repeat(3, 128px);

  gap: 16px;
  margin-top: 12px;
`;
