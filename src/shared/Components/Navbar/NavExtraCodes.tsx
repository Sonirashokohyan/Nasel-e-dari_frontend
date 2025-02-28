import styled from "styled-components";
import {Input, Select, Space, Dropdown, Menu } from "antd";
import useWindowSize from "@features/hooks/useWindowsSize";
import { useState } from "react";
import { FirstNavDiv, FirstNavDiv2, IconLanguageNavDiv, LanguageNavDiv, LangWrapper, NavStyle, SearchStyled, SecondNavDiv, SecondNavDiv2, StyledButton } from "@shared/styled/NavbarStyle";











const { Search } = Input;

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
    const { width } = useWindowSize();
    const [language, setLanguage] = useState("Eng");


    const handleLanguageChange = (language: string) => {
        setLanguage(language);
    };


    const languageMenu = (
        <Menu>
            <Menu.Item key="1" onClick={() => handleLanguageChange("دری")}>
                دری
            </Menu.Item>
            <Menu.Item key="2" onClick={() => handleLanguageChange("English")}>
                English
            </Menu.Item>
            <Menu.Item key="3" onClick={() => handleLanguageChange("پشتو")}>
                پشتو
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            {width < 900 ? (
                <NavStyle>
                    <FirstNavDiv2>
                        <h3>Sawda</h3>
                        <LangWrapper>
                            <Dropdown overlay={languageMenu} trigger={["click"]}>
                                <LanguageNavDiv>
                                    <IconLanguageNavDiv />
                                    <h3>{language.slice(0, 3)}</h3>
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
            ) : (
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
                        <Dropdown overlay={languageMenu} trigger={["click"]}>
                            <LanguageNavDiv>
                                <IconLanguageNavDiv />
                                <h3>{language.slice(0, 3)}</h3>
                            </LanguageNavDiv>
                        </Dropdown>
                    </SecondNavDiv>
                </NavStyle>
            )}
        </>
    );
};

export default Navbar;
