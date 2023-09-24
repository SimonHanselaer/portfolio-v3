import React from "react";
import { SubtitleH2, SubtitleH3, SubtitleDefault } from "./styles";

type ITag = "h2" | "h3";

export type ISubtitle = {
  children: React.ReactNode;
  tag?: ITag;
};

export const Subtitle = ({ children, tag, ...rest }: ISubtitle) => {
  switch (tag) {
    case "h2":
      return <SubtitleH2 {...rest}>{children}</SubtitleH2>;
    case "h3":
      return <SubtitleH3 {...rest}>{children}</SubtitleH3>;
    default:
      return <SubtitleDefault {...rest}>{children}</SubtitleDefault>;
  }
};
