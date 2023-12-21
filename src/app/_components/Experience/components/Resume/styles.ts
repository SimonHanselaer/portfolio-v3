import Image from "next/image";
import styled from "styled-components";

export const StyledImage = styled(Image)`
  filter: contrast(0.7);
  border: solid 1px ${({ theme }) => theme.colors.base.primary}50;
`;
