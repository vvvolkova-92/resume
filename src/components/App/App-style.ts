import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${ ({theme}) => theme.backgroungGradient};
  height: 100vh;
`;
export const Wrapper = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  padding: 40px;
  min-width: 800px;
  min-height: 600px;
  
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

export const Step = styled.div`
  min-height: 300px;
  max-height: 400px;
`;