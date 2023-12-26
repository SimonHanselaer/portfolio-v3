import React from "react";

import { Wrapper, StyledText } from "./styles";

interface IError {
  children: React.ReactNode;
}

export const Error = ({ children }: IError) => {
  return (
    <Wrapper>
      <StyledText>{children}</StyledText>
    </Wrapper>
  );
};
