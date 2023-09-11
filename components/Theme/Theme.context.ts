import { createContext } from "react";
import { ThemeContextType, ThemeType, Themes } from "./Theme.types";

export const initialThemeState: ThemeContextType = {
  theme: Themes.DARK,
  setTheme: (theme: ThemeType) => {
    throw Error(
      `Theme setter function not defined. Please check <Theme /> component in your placement ${theme}`
    );
  },
};

const ThemeContext = createContext<ThemeContextType>(initialThemeState);
export default ThemeContext;
