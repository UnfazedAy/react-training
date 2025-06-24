import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import LangContext from "./context/LangContext";

const Main = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { lang, changeLang } = useContext(LangContext);

  return (
    <div>
      <hr />
      <h1>Main</h1>
      <p>Theme: {theme}</p>
      <p>Language: {lang}</p>
      <button onClick={handleThemeChange}>Change</button>
      <button onClick={changeLang}>Change Lang</button>
    </div>
  );
};

export default Main;
