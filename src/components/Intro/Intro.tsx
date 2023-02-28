import {FC} from "react";
import {Cite, Container, Quote, Text} from "./style-Intro";
import {ToolTipContent} from "../../utils/constants";
import {ToolTip} from "../../ui/ToolTip/ToolTip";

export const Intro: FC = () => {
  return (
    <>
      <Container>
        <Quote>Писать обычное резюме на эту должность слишком скучно ¯\_(ツ)_/¯</Quote>
        <Cite>испытывающая мучения при составлении резюме, Волкова В.В</Cite>
      </Container>
      <Text>Предлагаю <ToolTip content={ToolTipContent} title={'тебе'}/> самостоятельно выбрать пункты, которые ты хочешь
        обо мне узнать.
        Нужна ли в итоговом варианте моя фотография? Хочешь узнать, кого я больше люблю: котиков или собачек?
        Или лучше абстрагироваться от лишнего и узнать только о профессиональных навыках?
      </Text>
      <Text>Чтобы начать нажми кнопку "Далее"</Text>
    </>
  );
};