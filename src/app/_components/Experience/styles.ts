import styled from "styled-components";
import { getBackground } from "@/utils";

export const Section = styled.section`
  grid-area: experience;

  padding: ${({ theme }) => theme.spacing.l}px;

  ${({ theme }) => getBackground({ rotation: "east", theme })};
`;
