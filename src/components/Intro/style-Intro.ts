import styled from "styled-components";
export const Wrapper = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
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

  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: ${ ({theme}) => theme.textColor};
  font-style: italic;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  max-width: 720px;

  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: ${ ({theme}) => theme.textColor};
`;


