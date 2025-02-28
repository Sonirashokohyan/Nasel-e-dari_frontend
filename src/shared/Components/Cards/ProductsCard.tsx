import styled from "styled-components"
import { bannerMobile } from "@shared/Images/bannerMobile.jpg";

const ProductsCardStyle= styled.div`
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



const ProductsCard = () => {
  return (
    <ProductsCardStyle>
        <img src={bannerMobile} alt="" />
    </ProductsCardStyle>
  )
}

export  { ProductsCard }