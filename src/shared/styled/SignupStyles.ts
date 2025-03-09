import styled from "styled-components";

const StyledSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;


const SignupFormStyled = styled.form`
        display: flex;
        flex-direction:column;
        width: 25rem;
        padding: 1rem;
        & .textInput input,
        & .selectInput input
        {
            border-radius: 10px;
            border: 2px solid rgb(92, 119, 151);
            padding-block: 1.2rem;
        }
        & .passwordInput .mantine-Input-input
        {
            border-radius: 10px;
            border: 2px solid rgb(92, 119, 151);
            padding: 1.2rem;
            background-color: transparent;
        }
        & h2{
            text-align: center;
            font-size: 1.5rem;
            color: #201f1f;
        }
        & h5{
            padding-left: .5rem;
            color:rgb(242, 4, 4);
            font-weight: 400;
        }
        & p{
            color: #5f5d5d;
            text-align: center;
            font-size: .85rem;
            & span{
                color: rgb(11, 105, 220);
            }
        }
        & span{
            text-align: center;
            color: #5f5d5d;
            font-size: .85rem;
        }
        @media (max-width: 500px) {
            width: 95%;
        }
    `;

const SignupOrDivStyle = styled.div`
        margin-block: .5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        & span{
            border: 1px solid gray;
            width: 47%;
            height: 0rem;
            font-size: 1rem;
            color: gray;
        }
        & p{
            font-size: 1rem;
            color: #4f4d4d;
            border-radius: 50%;
            position: relative;
            top: 4px;
        }
    `;

const SignupButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem;
    background-color: rgb(11, 105, 220);
    border: 2px solid rgb(11, 105, 220);
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    padding-bottom: .6rem;
    margin-top: .2rem;
    &:hover{
        opacity: .9;
    }
`;

const SignupButtonStyle2 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    padding: .4rem;
    border: 2px solid rgb(11, 105, 220);
    border-radius: 10px;
    cursor: pointer;
    color: black;
    
`;




export { StyledSelectWrapper , SignupFormStyled,SignupOrDivStyle, SignupButtonStyle , SignupButtonStyle2 }