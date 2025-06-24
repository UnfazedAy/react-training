import { useContext } from "react";
import Main from "../Main";
import ChangeThemeBtn from "./ChangeThemeBtn";
import Footer from "./Footer";
import ThemeContext from "../context/ThemeContext";

const Container = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme}`}>
      <ChangeThemeBtn />
      <Main />
      <hr />
      <Footer />
    </div>
  );
};

export default Container;
