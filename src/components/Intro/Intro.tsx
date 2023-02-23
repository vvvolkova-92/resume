import {FC} from "react";
import {Cite, Container, Quote, Text, Title, Wrapper} from "./style-Intro";

export const Intro: FC = () => {
  return (
    <Wrapper>
      <Title>Frontend Developer</Title>
      <Container>
        <Quote>Писать обычное резюме на эту должность слишком скучно ¯\_(ツ)_/¯</Quote>
        <Cite>соискатель, Волкова В.В</Cite>
      </Container>
      <Text></Text>
    </Wrapper>
  );
};