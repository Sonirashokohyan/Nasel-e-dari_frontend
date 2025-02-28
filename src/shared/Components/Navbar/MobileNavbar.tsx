import React from "react";
import { Dropdown, Menu, Input, Select, Space } 
from "antd";
import {
  FirstNavDiv2,
  IconLanguageNavDiv,
  LanguageNavDiv,
  LangWrapper,
  NavStyle,
  SearchStyled,
  SecondNavDiv2,
  StyledButton,
} from "@shared/styled/NavbarStyle";

const { Search } = Input;

interface MobileNavbarProps {
  language: string;
  handleLanguageChange: (language: string) => void;
  options: { value: string; label: string }[];
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  language,
  handleLanguageChange,
  options,
}) => {

const languageMenu = {
    items: [
        {
            key: "1",
            label: "دری",
            onClick: () => handleLanguageChange("دری"),
        },
        {
            key: "2",
            label: "English",
            onClick: () => handleLanguageChange("Eng"),
        },
        {
            key: "3",
            label: "پشتو",
            onClick: () => handleLanguageChange("پشتو"),
        },
    ],
};


  return (
    <NavStyle>
      <FirstNavDiv2>
        <h3>Sawda</h3>
        <LangWrapper>
          <Dropdown menu={languageMenu} trigger={["click"]}>
            <LanguageNavDiv>
              <IconLanguageNavDiv />
              <h3>{language}</h3>
            </LanguageNavDiv>
          </Dropdown>
          <StyledButton type="primary">Login</StyledButton>
        </LangWrapper>
      </FirstNavDiv2>
      <SecondNavDiv2>
        <SearchStyled>
          <Select defaultValue="Category" options={options} />
          <Search placeholder="Search for anything" allowClear />
        </SearchStyled>
      </SecondNavDiv2>
    </NavStyle>
  );
};

export default MobileNavbar;