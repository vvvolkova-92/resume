import {DefaultTheme} from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroungGradient: string;
    wrapperColor: string;
    textColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  backgroungGradient: 'linear-gradient(-225deg, #B6CEE8 0%, #F578DC 100%)',
  textColor: '#fff',
  wrapperColor: 'rgba(0, 0, 0, .4)',
};

export const darkTheme: DefaultTheme = {
  backgroungGradient: 'linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)',
  textColor: 'red',
  wrapperColor: 'rgba(255, 255, 255, .4)',
};
