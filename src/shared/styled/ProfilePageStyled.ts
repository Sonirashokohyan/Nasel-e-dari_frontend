import styled from "styled-components";


const ProfilePageDiv = styled.main`
display:flex;
flex-direction:column;
@media (max-width:500px) {
  padding-bottom:.5rem;
}
`;

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
  margin-Block: 0.3rem;
  
  & span {
    color: rgb(11, 105, 220);
    font-size: 1.2rem;
    @media (max-width: 700px) {
        font-size: 0.9rem;
      }
  }
  
  & div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    
    & p {
      margin: 0;
      font-size: 0.9rem;
      @media (max-width: 700px) {
        font-size: 0.8rem;
      }
    }
  }
    @media (max-width: 700px) {
    width:90%
    
  }
`;



const ContainerProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 2rem;
  @media (max-width: 700px) {
        padding-block: 0.8rem;
      }
`;

const GridProfilePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-block: 0.5rem;
  @media (max-width: 700px) {
        margin-block: .3rem;
      }
`;

const InfoProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  text-align: start;

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
    @media (max-width: 700px) {
    text-align: center;
    & h3{
    font-size: .9rem;}
    & p{
    font-size:.8rem;}
    & span{
    font-size:.8rem;}
  }
`;


const LessonsWrapperProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid green;
  border-radius: 10px;
  overflow: hidden;
  height: 70%;
  width:30%;

  & h3 {
    text-align: center;
    border-bottom: 2px solid green;
    padding: 0.7rem 1rem;
  }

  & div {
    border-bottom: 1px solid green;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 700px) {
  width:35%;
  height: 60%;

    & h3{
    font-size: .9rem;}
    & div{
    font-size:.8rem;}
  }
    @media (max-width: 500px) {
  width:90%;}
`;




const MainDivProfilePage = styled.div`
width: 100%;
height: 95vh;
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
gap: 1rem;

@media (max-width: 700px) {
  padding: 0.3rem;
  gap: 0.5rem;
}
@media (max-width: 500px) {
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  padding-top: 4rem;
}
`;

const LeftDivProfilePage = styled.div`
position: relative;
width: 50%;
display: flex;
flex-direction: column;
border: 2px solid green;
border-radius: 10px;

@media (max-width: 1000px) {
  width: 60%;
}
@media (max-width: 500px) {
  width: 90%;
}
`;


const ProfileDivProfilePage = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-inline: 2rem;
  padding-block: 4rem 1rem;
  border-bottom: 2px solid green;
  
  @media (max-width: 1000px) {
    gap: 0.5rem;
    padding-inline: 1rem;
    padding-block: 3rem 1rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    padding-block: 0.5rem;
  }
`;

const ImageDivProfiePage = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 1000px) {
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: 700px) {
    width: 4rem;
    height: 4rem;
  }
`;


export { ProfilePageDiv, IconWrapperProfilePage, CardProfilePage, ContainerProfilePage, GridProfilePage, InfoProfilePage, LessonsWrapperProfilePage , MainDivProfilePage ,LeftDivProfilePage , ImageDivProfiePage , ProfileDivProfilePage};
