import {Intro} from "../Intro/Intro";
import {AppWrapper, ButtonContainer, ChangeTheme, Steps, StepScreen, ThemeButton, Title, Wrapper} from "./App-style";
import {useMultiStep} from "../../hooks/useMultiStep";
import {Button} from "../../ui/Button/Button";
import {ThemeColor} from "../../utils/constants";
import {PersonalInformation} from "../PersonalInformation/PersonalInformation";
import {DataProvider} from "../../context/context";
import {ProfInformation} from "../ProfInformation/ProfInformation";
import {Resume} from "../Resume/Resume";
import {forwardRef, useRef, useState} from "react";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../styles/themes";
import {useReactToPrint} from "react-to-print";
import {Props, TRef} from "../types/types";

const Step = forwardRef<TRef, Props>((props, ref) => {
  // @ts-ignore
  return <div ref={ref}>
    <Steps size={props.size}>
      {props.step}
    </Steps>
  </div>
})

export function App() {
  const {steps, currentStepIndex, isFirstStep, isLastStep, next, back, step, goTo, getResume} = useMultiStep([
    <Intro/>,
    <PersonalInformation/>,
    <ProfInformation />,
    <Resume />,
  ]);
  const [theme, setTheme] = useState(ThemeColor.Dark);
  const [state, setState] = useState('');
  const ref: TRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });
  const onNextClickHandler = async() => {
    if(!isLastStep) next()
    else {
      await setState('all');
      await handlePrint();
      await setState('');
    }
  };
  const onBackClickHandler = () => {
    back();
  };
  return (
    <DataProvider>
      <ThemeProvider theme={theme === ThemeColor.Light ? lightTheme : darkTheme}>
        <AppWrapper>
          <ChangeTheme >
            <ThemeButton
              color={ThemeColor.Dark}
              onClick={() => setTheme(ThemeColor.Dark)}
              type="radio"
              name={'theme'}
              defaultChecked={theme === ThemeColor.Dark ? true : false}
            />
            <ThemeButton
              color={ThemeColor.Light}
              onClick={() => setTheme(ThemeColor.Light)}
              type="radio"
              name={'theme'}
              defaultChecked={theme === ThemeColor.Light ? true : false}
            />
          </ChangeTheme>
          <Wrapper size={isLastStep ? 'large': 'small'}>
            {!isLastStep && <>
              <Title>
                Frontend Developer
                <StepScreen>
                  {currentStepIndex+1} / {steps.length-1}
                </StepScreen>
              </Title>
            </>}
            <Step size={!isLastStep ? 'small': state === 'all' ? 'all': 'large'} ref={ref} step={step}/>
            <ButtonContainer>
              {!isFirstStep && <Button title="Назад" onClickHandler={onBackClickHandler}/>}
              {<Button title={getResume ? 'Получить резюме' : isLastStep ? 'Сохранить' : 'Далее'} onClickHandler={onNextClickHandler}/>}
            </ButtonContainer>
          </Wrapper>
        </AppWrapper>
      </ThemeProvider>
    </DataProvider>
  )
}
export default App
