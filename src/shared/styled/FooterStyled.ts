
import styled from "styled-components";


const FooterStyle = styled.footer`
    width:100%; 
    display:flex;
    justify-content:space-between;
    align-items:start;
    padding:2rem 4rem;
    background-color:#fff;
     & ul{
       list-style-type: none;
       display:flex;
       flex-direction: column;
       gap:1rem;
       color:gray;
       font-size:clamp(.8rem, 2vw, 1rem);
       & li:hover{
       color: #336aea;

       }
     }


     @media (max-width:1200px){
        padding:2rem;
     }

     @media (max-width:900px){
       flex-wrap:wrap;
       justify-content:start;
       gap:1rem;
    }

`;


const FirstBoxFooter = styled.div`
    width:25%;
    display:flex;
    flex-direction:column;
    align-items:start;
    gap:1rem;
    padding:2rem 0;

     & p{
        color:gray;
        font-size:clamp(.8rem, 2vw, 1rem);
      }

    @media (max-width:900px){
        width:35%;
        flex-grow:2;
        padding-right:1rem;
    }

    @media (max-width:400px){
        width:100%;
    }
    
`;

const BoxFooter = styled.div`
    width:15%;
    display:flex;
    flex-direction:column;
    align-items:start;
    gap:1rem;
    padding:2rem 0;

     & p{
        color:gray;
        font-size:clamp(.8rem, 2vw, 1rem);
      }

    @media (max-width:900px){
        width:35%;
        flex-grow:2;
    }

    @media (max-width:400px){
        width:100%;
    }
    
`;

const FirstTitleDivFooter = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:1rem;
    font-size:clamp(1rem, 2vw, 1.6rem);
    color: #336aea;
    font-weight:500;
    & h5{
        font-size:clamp(1rem, 2vw, 1.1rem);
        font-weight:500;
    }
`;
const LocationWrapperfooter = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
`;
const LocationDetialsFooter = styled.div`
    display:flex;
    align-items:center;
    gap:1rem;
    font-size:clamp(1rem, 2vw, 1.3rem);
    color: #336aea;
    & span {
        font-size:clamp(.8rem, 2vw, 1rem);
        color: gray;

        &:hover{
            color: #336aea;
        }
    }
     @media (max-width:900px){
        gap:.5rem;
     }
`;

const SocialFooter = styled.div`
    display:flex;
    gap:1rem;
    color: #336aea;
    font-size:clamp(1rem, 2vw, 1.4rem)
`;


export {FooterStyle, FirstBoxFooter, BoxFooter, FirstTitleDivFooter, LocationWrapperfooter, LocationDetialsFooter, SocialFooter}