import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(20px);
  border-radius: ${({ theme }) => theme.spacing.s}px;
  box-shadow: ${({ theme }) => theme.boxShadows.primary};
  background: ${({ theme }) => theme.colors.gradients.secondary};

  aspect-ratio: 1 / 1;
`;
