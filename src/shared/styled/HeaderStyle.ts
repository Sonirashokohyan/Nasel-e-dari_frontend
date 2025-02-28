import styled from "styled-components";
import { Image } from "antd";

// Header.tsx style

const ContainerHeader = styled.div` 
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:3rem 5rem;

    @media (max-width:1100px){
        padding:2rem;
    }

    @media (max-width:768px){
        flex-direction:column;
        gap:1rem;
        padding:1rem;
    }

`;

// HeaderLeft.tsx style

const BoxLeftHeader = styled.div`
    position:relative;
    width:42%;
    height:53vh;
    padding:3rem;
    background-color: #fff;
    border:1px solid #C3D4E9;
    border-radius:7px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;


    @media (max-width:768px){
        width:100%;
        height:auto;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:1rem;
    }
    @media (max-width:500px){
        flex-direction: column;
    }

`;

const MiniBoxLeftHeader = styled.div`
    height:100%;
    width:100%;
    display:flex; 
    flex-direction:column;
    align-items:start;
    gap:1rem;
    
    & h3{
        font-size:clamp(1.1rem, 3vw, 1.5rem);
        font-weight: 500;
    }
        & p{
        font-size:clamp(.8rem, 3vw, 1.1rem);

        }

    @media (max-width:768px){
        width:49%;
    }
    @media (max-width:500px){
        width:100%;
    }

`;

const BIgScImageLeftHeader = styled.div`
    position: absolute;
    width:41%;
    bottom:0px;
    right:0px;
    
`;
const SmallScImageHeader = styled.div`
    width: 50%;
    height:100%;

    @media (max-width:500px){
        width:13rem;
    }
    @media (max-width:250px){
        width:100%;
    }
`;


const ImageLeftHeader = styled(Image)`
     height:20vh;
`;


// HeaderRight.tsx style

const BoxRightHeader = styled.div`
    width: 57%;
    height: 53vh;
    background-color: #fff;
    border: 1px solid #c3d4e9;
    border-radius: 7px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const SliderDivHeader= styled.div`
    height:53vh;
    width: 100%;

`;

const ImageSliderHeader= styled(Image)`
    border-radius: 7px;
    object-fit: cover;

`;
export {ContainerHeader, BoxLeftHeader,  MiniBoxLeftHeader, BIgScImageLeftHeader, SmallScImageHeader, ImageLeftHeader, BoxRightHeader, SliderDivHeader, ImageSliderHeader }