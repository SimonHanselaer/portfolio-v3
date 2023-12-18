"use client";

import { ThemeProvider as Provider } from "styled-components";
import { theme } from "./theme";

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProvider) => {
  return <Provider theme={theme}>{children}</Provider>;
};
