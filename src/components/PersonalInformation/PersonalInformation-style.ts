import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  align-self: flex-start;
  max-width: 720px;

  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: ${ ({theme}) => theme.textColor};
`;

export const RadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Table = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`;

export const BorderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 20px 10px;
  border: 1px solid white;
  border-radius: 10px;
  //max-width: 160px;
  width: 100%;
  
  &:after {
    position: absolute;
    content: ${props => `'${props.title}'`};
    top: -15px;
    left: 10px;
    z-index: 100;
    padding: 5px 10px;
    background-color: white;
    border-radius: 10px;
    color: var(--pink-color);
  }
`;