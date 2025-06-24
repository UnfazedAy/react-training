import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LangContext from "../context/LangContext";

const ChangeThemeBtn = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div>
      <h1>Header</h1>
      <p>Theme: {theme}</p>
      <p>Language: {lang}</p>
      <button onClick={handleThemeChange}>Change</button>
    </div>
  );
};

export default ChangeThemeBtn;
