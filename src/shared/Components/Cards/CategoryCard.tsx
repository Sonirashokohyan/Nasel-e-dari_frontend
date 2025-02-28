import styled from "styled-components"
import { Image } from "antd";
import { CarIcon } from "@shared/Images/Image";



const SmallCardStyle= styled.div`
    width:10rem;
    height:7rem;
    display:flex;
    align-items:center;
    flex-direction:column;
    border:1px solid #C3D4E9;
    background-color: #fff;
    border-radius:7px;
    padding:1rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    

`;

const SmallCardsParagraph = styled.p`
border-top: 1px solid #C3D4E9;
        width:90%;
        text-align:center;
        padding-top:.3rem;
        font-size:clamp(.8rem, 2vw, 1rem)
`;



const CategoryCard = () => {
  return (
    <SmallCardStyle>
        <Image
            src={CarIcon}
            height='70%'
        
        />
        <SmallCardsParagraph>
            Car
        </SmallCardsParagraph>
       

    </SmallCardStyle>
  )
}

export  {CategoryCard}