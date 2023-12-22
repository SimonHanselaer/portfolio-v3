"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { DefaultTheme } from "styled-components";

import { light, dark } from "./foundations";
import { theme as defaultTheme } from "./theme";

type IMode = "light" | "dark";

export interface ThemeContextProps {
  mode: IMode;
  theme: DefaultTheme;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: "light",
  theme: { ...defaultTheme, colors: light.colors } as DefaultTheme,
  toggleMode: () => {},
});

interface ThemeProviderProps {
  children: React.ReactElement;
}

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<IMode>("light");

  const theme = useMemo(
    () =>
      ({
        ...defaultTheme,
        colors: (mode === "light" ? light : dark).colors,
      } as DefaultTheme),
    [mode]
  );

  const toggleMode = useCallback(() => {
    setMode((prevState) => (prevState === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(
    () => ({ mode, theme, toggleMode }),
    [mode, theme, toggleMode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
