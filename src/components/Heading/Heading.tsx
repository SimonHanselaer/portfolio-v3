import React from "react";
import { Header1, Header2, Header3, HeaderDefault } from "./styles";

type ITag = "h1" | "h2" | "h3";

export type IHeading = {
  children: React.ReactNode;
  tag?: ITag;
};

export const Heading = ({ children, tag, ...rest }: IHeading) => {
  switch (tag) {
    case "h1":
      return <Header1 {...rest}>{children}</Header1>;
    case "h2":
      return <Header2 {...rest}>{children}</Header2>;
    case "h3":
      return <Header3 {...rest}>{children}</Header3>;
    default:
      return <HeaderDefault {...rest}>{children}</HeaderDefault>;
  }
};
