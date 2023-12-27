"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
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

export const ThemeContext = createContext<ThemeContextProps>({} as any);

interface ThemeProviderProps {
  children: React.ReactElement;
}

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<IMode>(
    new Date().getHours() < 12 ? "light" : "dark"
  );

  const toggleMode = useCallback(() => {
    setMode((prevState) => (prevState === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(
    () =>
      ({
        ...defaultTheme,
        colors: (mode === "light" ? light : dark).colors,
      } as DefaultTheme),
    [mode]
  );

  useEffect(() => {
    document.body.style.backgroundColor = theme.colors.base.secondary;
  }, [theme.colors.base.secondary]);

  const value = useMemo(
    () => ({ mode, theme, toggleMode }),
    [mode, theme, toggleMode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
