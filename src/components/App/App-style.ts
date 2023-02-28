import styled from "styled-components";

interface IStep {
  size: string;
}
export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${ ({theme}) => theme.backgroungGradient};
  height: 100vh;
`;
export const Wrapper = styled.main<IStep>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  padding: 40px;
  width: 800px;
  min-height: ${props => props.size === 'small' ? '600px' : '700px'};
  
  background-color: ${ ({theme}) => theme.wrapperColor};
  border-radius: 30px;
`;

export const Title = styled.h1`
  margin: 0;
  max-width: 410px;
  
  font-weight: 300;
  font-size: 34px;
  line-height: 130%;
  color: ${ ({theme}) => theme.textColor};
  text-align: center;
  text-transform: uppercase;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  gap: 30px;
  min-width: 40%;
`;

export const Step = styled.div<IStep>`
  min-height: ${props => props.size === 'small' ? '300px' : '500px'};
  max-height: ${props => props.size === 'small' ? '400px' : '500px'};
  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;
`;