import styled from "styled-components";



 const MainDivSettingPage = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OptionsDivSettingPage = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & h3 {
    border-bottom: 1px solid black;
    text-align: center;
    padding-bottom: 0.5rem;
  }
`;

const UnorderedUlSettingPage = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  & li {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;


export { MainDivSettingPage, OptionsDivSettingPage ,UnorderedUlSettingPage}