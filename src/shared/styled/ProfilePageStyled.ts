import styled from "styled-components";

const IconWrapperProfilePage = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  top: 7px;
  ${({ position }) => (position === "left" ? "left: 7px;" : "right: 7px;")}
  padding: 0.5rem;
  background-color: rgb(185, 194, 216);
  font-size: 1.5rem;
  border-radius: 10px;
  color: rgb(24, 83, 221);
  cursor: pointer;
  
  &:hover {
    background-color: rgb(204, 213, 233);
  }

  @media (max-width: 1000px) {
    padding: 0.3rem;
    font-size: 1.2rem;
  }
`;

const CardProfilePage = styled.div`
  display: flex;
  align-items: center;
  width: 46%;
  padding: 0.5rem;
  border: 2px solid green;
  border-radius: 5px;
  gap: 0.3rem;
  
  & span {
    color: rgb(11, 105, 220);
    font-size: 1.2rem;
  }
  
  & div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    
    & p {
      margin: 0;
      font-size: 0.9rem;
    }
  }
`;



const ContainerProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 2rem;
`;

const GridProfilePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-block: 0.5rem;
`;


const InfoProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;

  & h3 {
    font-size: 1.2rem;
    color: black;
    margin: 0;
  }
  
  & p {
    color: gray;
    font-size: 0.9rem;
    margin: 0;
  }
  
  & span {
    color: rgb(11, 105, 220);
    font-size: 0.9rem;
  }
`;


const LessonsWrapperProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid green;
  border-radius: 10px;
  overflow: hidden;
  height: 70%;

  & h3 {
    text-align: center;
    border-bottom: 2px solid green;
    padding: 0.7rem 1rem;
  }

  & div {
    border-bottom: 1px solid green;
    padding: 0.5rem 1rem;
  }
`;


export { IconWrapperProfilePage, CardProfilePage, ContainerProfilePage, GridProfilePage, InfoProfilePage, LessonsWrapperProfilePage };
