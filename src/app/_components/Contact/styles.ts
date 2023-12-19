import styled from "styled-components";
import { getBackground } from "@/utils/styles";

export const Section = styled.section`
  grid-area: contact;

  padding: ${({ theme }) => theme.spacing.m}px;

  ${({ theme }) => getBackground({ rotation: "west", theme })};

  @media (max-width: ${(p) => p.theme.mediaQueries.m}px) {
    ${({ theme }) => getBackground({ rotation: "north", theme })};
  }
`;

export const ContactLinks = styled.ul`
  display: grid;
  grid-template-rows: repeat(1, 73.5px);
  grid-template-columns: repeat(3, 73.5px);

  gap: ${({ theme }) => theme.spacing.s}px;
  margin-top: ${({ theme }) => theme.spacing.s}px;
`;

export const ContactLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.spacing.s}px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  background: ${({ theme }) => theme.colors.gradients.secondary};
`;
