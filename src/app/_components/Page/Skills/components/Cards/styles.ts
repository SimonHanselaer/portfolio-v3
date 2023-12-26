import styled from "styled-components";

export const Wrapper = styled.ul`
  display: grid;
  grid-template-rows: repeat(5, 73.5px);
  grid-template-columns: repeat(5, 73.5px);
  gap: ${({ theme }) => theme.spacing.s}px;

  margin-top: ${({ theme }) => theme.spacing.s}px;

  @media (max-width: ${({ theme }) => theme.mediaQueries.s}px) {
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(5, 1fr);
  }
`;
