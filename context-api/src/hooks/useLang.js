import { useState } from "react";

const useLang = () => {
  const [lang, setLang] = useState("us");
  const changeLang = () => {
    setLang((prevLang) => (prevLang === "en" ? "us" : "en"));
  };
  return { lang, changeLang };
};

export default useLang;
