import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${ ({theme}) => theme.backgroungGradient};
  height: 100%;
`;