import styled from "styled-components";
interface IToolTip {
  content?: string,
}
export const ToolTipWrapper = styled.span<IToolTip>`
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

    font-size: 14px;
    line-height: 16px;
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