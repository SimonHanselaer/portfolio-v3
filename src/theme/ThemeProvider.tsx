"use client";

import {
  StyleSheetManager,
  ThemeProvider as Provider,
} from "styled-components";

import { shouldForwardProp } from "@/utils";

import { ThemeContextProvider, useThemeContext } from "./ThemeContext";

interface IThemeProvider {
  children: React.ReactNode;
}

export const Component = ({ children }: IThemeProvider) => {
  const { theme, mode } = useThemeContext();

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Provider theme={theme} key={`themeProvider-${mode}`}>
        {children}
      </Provider>
    </StyleSheetManager>
  );
};

export const ThemeProvider = ({ children }: IThemeProvider) => (
  <ThemeContextProvider>
    <Component>{children}</Component>
  </ThemeContextProvider>
);
