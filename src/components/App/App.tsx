import {Intro} from "../Intro/Intro";
import {AppWrapper, Title, Wrapper} from "./App-style";
import {useMultiStep} from "../../hooks/useMultiStep";
import {ButtonContainer} from "../Intro/style-Intro";
import {Button} from "../../ui/Button/Button";
import {Arrow} from "../../utils/constants";
import {PersonalInformation} from "../PersonalInformation/PersonalInformation";
import {DataProvider} from "../../context/context";
function App() {
const {steps, currentStepIndex, isFirstStep, isLastStep, next, back, step, goTo} = useMultiStep([<Intro/>, <PersonalInformation/>]);
  return (
    <DataProvider>
      <AppWrapper>
        {/*<ChangeTheme />*/}
        <Wrapper>
          <Title>Frontend Developer</Title>
          {step}
          <ButtonContainer>
            { !isFirstStep && <Button title="Назад" onClickHandler={back} icon={Arrow.Right}/> }
            { <Button title={isLastStep ? 'Сохранить' : 'Далее'} onClickHandler={next} icon={Arrow.Right}/> }
          </ButtonContainer>
        </Wrapper>

      </AppWrapper>
    </DataProvider>
  )
}
export default App
