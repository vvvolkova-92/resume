import {Intro} from "../Intro/Intro";
import {AppWrapper, ButtonContainer, Step, Title, Wrapper} from "./App-style";
import {useMultiStep} from "../../hooks/useMultiStep";
import {Button} from "../../ui/Button/Button";
import {Arrow} from "../../utils/constants";
import {PersonalInformation} from "../PersonalInformation/PersonalInformation";
import {DataProvider} from "../../context/context";
import {ProfInformation} from "../ProfInformation/ProfInformation";
import {Resume} from "../Resume/Resume";
export function App() {
  const {steps, currentStepIndex, isFirstStep, isLastStep, next, back, step, goTo, getResume} = useMultiStep([
    <Intro/>,
    <PersonalInformation/>,
    <ProfInformation />,
    <Resume />,
  ]);
  const onNextClickHandler = () => {
    if(!isLastStep) next()
    else alert('finish');
  };
  const onBackClickHandler = () => {
    back();
  };
  return (
    <DataProvider>
      <AppWrapper>
        {/*<ChangeTheme />*/}
        <Wrapper size={isLastStep ? 'large': 'small'}>
          {!isLastStep && <Title>Frontend Developer</Title>}
          <Step size={isLastStep ? 'large': 'small'}>
            {step}
          </Step>
          <ButtonContainer>
            { !isFirstStep && <Button title="Назад" onClickHandler={onBackClickHandler} icon={Arrow.Right}/> }
            { <Button title={getResume ? 'Получить резюме' : isLastStep ? 'Сохранить' : 'Далее'} onClickHandler={onNextClickHandler} icon={Arrow.Right}/> }
          </ButtonContainer>
        </Wrapper>
      </AppWrapper>
    </DataProvider>
  )
}
export default App
