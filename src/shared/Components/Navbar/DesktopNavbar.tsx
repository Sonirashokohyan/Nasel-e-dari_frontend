import React from "react";
import { Dropdown, Menu, Input, Select, Space } from "antd";
import {
  FirstNavDiv,
  IconLanguageNavDiv,
  LanguageNavDiv,
  NavStyle,
  SearchStyled,
  SecondNavDiv,
  StyledButton,
} from "@shared/styled/NavbarStyle";

const { Search } = Input;

interface DesktopNavbarProps {
  language: string;
  handleLanguageChange: (language: string) => void;
  options: { value: string; label: string }[];
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
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
      <FirstNavDiv>
        <h3>Sawda</h3>
        <SearchStyled>
          <Select defaultValue="Category" options={options} />
          <Search placeholder="Search for anything" allowClear />
        </SearchStyled>
      </FirstNavDiv>
      <SecondNavDiv>
        <StyledButton type="primary">Login</StyledButton>
        <Dropdown menu={languageMenu} trigger={["click"]}>
          <LanguageNavDiv>
            <IconLanguageNavDiv />
            <h3>{language}</h3>
          </LanguageNavDiv>
        </Dropdown>
      </SecondNavDiv>
    </NavStyle>
  );
};

export default DesktopNavbar;