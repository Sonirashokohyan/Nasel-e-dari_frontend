import styled from "styled-components";

// Define a styled component for Button and extend ButtonProps
const ButtonStyled = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }

  &:active {
    background-color: #2c6e32;
  }
`;

export { ButtonStyled } ;
