import React, { useState } from "react";
import useWindowSize from "@features/hooks/useWindowsSize";
import MobileNavbar from "@shared/Components/Navbar/MobileNavbar";
import DesktopNavbar from "@shared/Components/Navbar/DesktopNavbar";
import { WindowSize } from "@shared/allTypeScripts/Landing.type";


const options = [
  {
    value: "State",
    label: "State",
  },
  {
    value: "Category",
    label: "Category",
  },
  {
    value: "City",
    label: "City",
  },
];

const Navbar: React.FC = () => {
  const { width } = useWindowSize() as WindowSize;

  const [language, setLanguage] = useState("Eng");

  const handleLanguageChange = (language: string) => {
    setLanguage(language);
  };

  return (
    <>
      {width < 900 ? (
        <MobileNavbar
          language={language}
          handleLanguageChange={handleLanguageChange}
          options={options}
        />
      ) : (
        <DesktopNavbar
          language={language}
          handleLanguageChange={handleLanguageChange}
          options={options}
        />
      )}
    </>
  );
};

export default Navbar;