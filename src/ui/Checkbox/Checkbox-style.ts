import styled from "styled-components";
import image from "../../images/checkboxIcon.svg";

export const CheckboxWrapper = styled.div`
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    
    &+label {
      display: inline-flex;
      align-items: center;
      user-select: none;
      color: ${({theme}) => theme.checkbox.textColor};
    }
    
    &+label::before {
      display: inline-block;
      width: 25px;
      height: 25px;
      flex-shrink: 0;
      flex-grow: 0;
      content: '';
      
      border: 1px solid ${({theme}) => theme.checkbox.noChecked};
      border-radius: 7px;
      color: ${({theme}) => theme.checkbox.textColor};
      
      margin-right: 10px;
      background-color: ${({theme}) => theme.checkbox.noChecked};
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
    
    &:checked+label::before {
      background-color: ${({theme}) => theme.checkbox.checked};
      border-color: ${({theme}) => theme.checkbox.checked};
      background-image: url(${image});
    }
  }
`;