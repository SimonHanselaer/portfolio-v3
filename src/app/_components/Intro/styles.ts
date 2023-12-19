import styled from "styled-components";
import { getBackground } from "@/utils/styles";
import { Subtitle } from "@/theme";

export const Wrapper = styled.section`
  grid-area: intro;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.spacing.l}px;

  ${({ theme }) => getBackground({ rotation: "north", theme })};
`;

export const Title = styled(Subtitle)`
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const TextWrapper = styled.section`
  max-width: 492px;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s}px;
`;
