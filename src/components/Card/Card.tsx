import styled from "styled-components";

export const Card = styled.div`
  backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.spacing.s}px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  background: ${({ theme }) => theme.colors.gradient.secondary};
`;
