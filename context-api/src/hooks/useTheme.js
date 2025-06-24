import { useState } from "react";

const useTheme = () => {
  const defaultTheme = localStorage.getItem("theme") || "white";
  const [theme, setTheme] = useState(defaultTheme);

  const handleThemeChange = () => {
    setTheme((theme) => (theme === "white" ? "dark" : "white"));
  };
  return {theme, handleThemeChange};
};

export default useTheme;
