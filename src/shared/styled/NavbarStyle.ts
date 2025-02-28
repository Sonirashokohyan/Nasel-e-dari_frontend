
import styled from 'styled-components'

import { MdLanguage } from "react-icons/md";
import { Button, Space } from "antd";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 5rem;
  background-color: #fff;
  box-shadow: 0 1.95px 2.6px rgba(0, 0, 0, 0.15);
  color: black;
  width: 100%;
  background-color:#fff;
  z-index:10;
  margin-bottom:2px;
//   box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);
  

  @media (max-width: 900px) {
    padding: 0.5rem 1rem;
    flex-direction: column;
    gap: 0.7rem;
  }
`;

const FirstNavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 50%;
  min-width: 30rem;

  & h3 {
    font-size: clamp(1.2rem, 2vw, 2rem);
    color: #336aea;
    font-weight: bold;
    margin: 0;
    width: auto;
  }
`;

const FirstNavDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & h3 {
    font-size: 1.2rem;
    color: #336aea;
    font-weight: bold;
    margin: 0;
    width: auto;
  }
`;

const SearchStyled = styled(Space.Compact)`
  width: 90%;

  & .ant-input-group {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const StyledButton = styled(Button)`
  width: 7rem;

  @media (max-width: 500px) {
    width: 5rem;
  }
`;

const SecondNavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap:2rem;
  width: 20%;
  min-width: 15rem;

`;

const SecondNavDiv2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`;

const LanguageNavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer; /* Add cursor pointer to indicate it's clickable */

  & h3 {
    font-size: clamp(0.7rem, 2vw, 0.9rem);
    margin: 0;
    font-weight: 500;
  }
`;

const IconLanguageNavDiv = styled(MdLanguage)`
  color: #b6b6b6;
  font-size: clamp(1rem, 2vw, 1.5rem);

  &:hover{
  color:#5e91f7;
  }
`;

const LangWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;


export {NavStyle, FirstNavDiv, FirstNavDiv2,  SearchStyled, StyledButton, SecondNavDiv, SecondNavDiv2, LanguageNavDiv, IconLanguageNavDiv , LangWrapper}