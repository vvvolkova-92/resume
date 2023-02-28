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
  padding: 18px;
  min-width: 120px;
  
  background-color: ${({theme}) => theme.button.background};
  color: ${({theme}) => theme.button.textColor};
  text-align: center;
  font-size: 18px;
  border-radius: 20px;
`;