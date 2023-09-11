import { ReactNode } from "react";

export enum Themes {
  DARK = "dark",
  LIGHT = "light",
}

export type ThemeType = `${Themes}`;

export interface ThemeProps {
  children: ReactNode;
  defaultTheme: ThemeType;
}

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}
