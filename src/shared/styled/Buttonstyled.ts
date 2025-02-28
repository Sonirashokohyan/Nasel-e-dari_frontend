import styled from "styled-components";
import { Button } from 'antd';


export const StyledButton = styled(Button) <{
  btnbackground?: string;
  btnborder?: string;
  btncolor?: string;
  btnwidth?: string;
  fontWeight?: string;
  fontSize?: string;
  hoverbackground?: string;
  hoverborder?: string;
  hovercolor?: string;
  width?: string;
}>`
  &&&{
    background-color: ${({ btnbackground }) => btnbackground || '#fff'};
    border: 1px solid ${({ btnborder }) => btnborder || '#000'};
    color: ${({ btncolor }) => btncolor || '#fff'};
    width: ${({ btnwidth }) => btnwidth || '5rem'};
    font-weight: ${({ fontWeight }) => fontWeight || 'regular'};
    font-size: ${({ fontSize }) => fontSize || '1rem'};
    font-family: Roboto, sans-serif;

  
    &:hover {
      background-color: ${({ hoverbackground }) => hoverbackground || 'transparent'};
      color: ${({ hovercolor }) => hovercolor || 'transparent'};
      border: 1px solid ${({ hoverborder }) => hoverborder || '#000'};
    }


     @media (max-width:300px){
            width: ${({ width }) => width || 'auto'};
      }
  }
  `;