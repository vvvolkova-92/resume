import styled from "styled-components";

export const RadioButtonWrapper = styled.div`
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    
    &+label {
      display: inline-flex;
      align-items: center;
      user-select: none;
      color: ${({theme}) => theme.radiobutton.textColor};
    }
    
    &+label::before {
      display: inline-block;
      width: 25px;
      height: 25px;
      flex-shrink: 0;
      flex-grow: 0;
      content: '';
      
      border: 1px solid ${({theme}) => theme.radiobutton.noChecked};
      border-radius: 50%;
      color: ${({theme}) => theme.radiobutton.textColor};
      
      margin-right: 10px;
      background-color: ${({theme}) => theme.radiobutton.noChecked};
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
    
    &:checked+label::before {
      background-color: ${({theme}) => theme.radiobutton.checked};
      border-color: ${({theme}) => theme.radiobutton.checked};
      background-image: url('/src/images/radioButtonIcon.svg');
    };
  }
`;