import { createContext, useEffect } from "react";
import useTheme from "../hooks/useTheme";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const { theme, handleThemeChange } = useTheme();
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
