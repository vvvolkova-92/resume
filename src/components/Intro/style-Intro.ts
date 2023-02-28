import styled from "styled-components";
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
export const Text = styled.p`
  margin: 0;
  align-self: flex-start;
  max-width: 720px;

  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: ${ ({theme}) => theme.textColor};
`;



