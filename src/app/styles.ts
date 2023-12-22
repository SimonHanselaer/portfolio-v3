import styled from "styled-components";

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.base.secondary};

  max-width: ${({ theme }) => theme.mediaQueries.xl}px;
  margin: 0 auto;

  padding: 0 ${({ theme }) => theme.spacing.xl}px
    ${({ theme }) => theme.spacing.m}px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.s}px) {
    padding: 0 ${({ theme }) => theme.spacing.m}px
      ${({ theme }) => theme.spacing.m}px;
  }
`;

export const Header = styled.header`
  height: 96px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 448px auto 448px;
  grid-template-rows: 490px repeat(2, auto);
  grid-template-areas: "intro intro skills" "projects projects projects" "experience experience contact";

  gap: ${({ theme }) => theme.spacing.l}px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mediaQueries.m}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 490px repeat(4, auto);
    grid-template-areas: "intro" "projects" "skills" "experience" "contact";
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.xs}px) {
    grid-template-rows: repeat(5, auto);
  }
`;
