import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  //grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 
  "photo personal"            
  "contact education"            
  "contact work"
  "contact qualities";
`;