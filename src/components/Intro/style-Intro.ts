import styled from "styled-components";

interface IToolTip {
  content?: string,
}

export const Quote = styled.q`
  margin: 20px 0 0 0;
  max-width: 720px;

  align-self: flex-end;

  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: ${ ({theme}) => theme.textColor};
  text-align: right;
`;

export const Cite = styled.cite`
  margin: 12px 0 0 0;
  align-self: flex-end;
  max-width: 390px;

  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: ${ ({theme}) => theme.textColor};
  font-style: italic;
  text-align: right;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Text = styled.p`
  align-self: flex-start;
  max-width: 720px;

  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: ${ ({theme}) => theme.textColor};
`;

export const ToolTip = styled.span<IToolTip>`
  position: relative;
  cursor: pointer;
  color: ${ ({theme}) => theme.linkColor};
  transition: var(--animation);
  
  :hover {
    color: ${ ({theme}) => theme.textColor};
    transition: var(--animation);
  }
  
  &:after {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    
    padding: 10px;
    content: ${props => (props.content ? `'${props.content}'` : '')};
    top: -40px;
    left: 55px;
    width: 200px;
    min-height: 100px;
    
    background-color: ${ ({theme}) => theme.linkColor};
    border-radius: 10px;

    font-size: 12px;
    line-height: 14px;
    color: ${ ({theme}) => theme.textColor};
    
    transition: var(--animation);
    visibility: hidden;
    opacity: 0;
  }
  &:hover:after {
    visibility: visible;
    opacity: 1;
    transition: var(--animation);
  }
`;


