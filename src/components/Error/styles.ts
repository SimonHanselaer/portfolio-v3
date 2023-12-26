import styled from "styled-components";

import { Text } from "@/theme";

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: dashed 1px ${({ theme }) => theme.colors.base.error};
  background-color: ${({ theme }) => theme.colors.base.error}30;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.base.error};
`;
