import styled from "styled-components";
import { getBackground } from "@/utils/styles";
import { Text } from "@/theme";

export const Section = styled.section`
  grid-area: about;

  padding: ${({ theme }) => theme.spacing.l}px;

  ${({ theme }) => getBackground({ rotation: "east", theme })};
`;

export const ItemContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 344px);
  gap: ${({ theme }) => theme.spacing.xl}px;

  margin-top: ${({ theme }) => theme.spacing.m}px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.xl}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.l}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.li`
  max-width: 344px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.xl}px) {
    max-width: 400px;
  }
`;

export const StyledText = styled(Text)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m}px;

  margin-top: ${({ theme }) => theme.spacing.s}px;
`;
