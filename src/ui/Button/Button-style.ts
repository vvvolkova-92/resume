import styled from "styled-components";
import {Arrow} from "../../utils/constants";

interface IButton{
  icon?: string,
}

export const StyledButton = styled.button<IButton>`
  all: unset;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  padding: 20px;
  min-width: 120px;
  
  background-color: ${({theme}) => theme.button.background};
  color: ${({theme}) => theme.button.textColor};
  border-radius: 20px;
  
  &:after {
    position: absolute;
    content: ${props => (props.icon === Arrow.Right 
            ? "'→'" 
            : props.icon === Arrow.Left ? "'←'" : '')};
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    
    font-size: 40px;
  }
`;