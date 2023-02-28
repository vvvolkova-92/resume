import {DefaultTheme} from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroungGradient: string;
    wrapperColor: string;
    textColor: string;
    linkColor: string;
    button: {
      background: string,
      textColor: string
    };
    checkbox: {
      checked: string,
      noChecked: string,
      textColor: string,
    };
    radiobutton: {
      checked: string,
      noChecked: string,
      textColor: string,
    };
    titleColor: string;
    subtitleColor: string,
  }
}

export const lightTheme: DefaultTheme = {
  backgroungGradient: 'linear-gradient(-225deg, var(--blue-color) 0%, var(--pink-color) 100%)',
  textColor: 'var(--text-color)',
  wrapperColor: 'var(--wrapper-color)',
  linkColor: 'var(--link-light-color)',
  button: {
    background: 'var(--button-light-color)',
    textColor: 'var(--button-text-color)',
  },
  checkbox: {
    checked: 'var(--checkbox-light-color)',
    noChecked: 'var(--checkbox-no-color)',
    textColor: 'var(--checkbox-text-color)',
  },
  radiobutton: {
    checked: 'var(--radiobutton-light-color)',
    noChecked: 'var(--radiobutton-no-color)',
    textColor: 'var(--radiobutton-text-color)',
  },
  titleColor: 'var(--title-color)',
  subtitleColor: 'var(--subtitle-color)',
};

export const darkTheme: DefaultTheme = {
  backgroungGradient: 'linear-gradient(-225deg, var(--second-color) 0%, var(--magenta-color) 50%, var(--violet-color) 100%)',
  textColor: 'var(--text-color)',
  wrapperColor: 'var(--wrapper-color)',
  linkColor: 'var(--link-color)',
  button: {
    background: 'var(--button-dark-color)',
    textColor: 'var(--button-text-color)',
  },
  checkbox: {
    checked: 'var(--checkbox-dark-color)',
    noChecked: 'var(--checkbox-no-color)',
    textColor: 'var(--checkbox-text-color)',
  },
  radiobutton: {
    checked: 'var(--radiobutton-light-color)',
    noChecked: 'var(--radiobutton-no-color)',
    textColor: 'var(--radiobutton-text-color)',
  },
  titleColor: 'var(--title-color)',
  subtitleColor: 'var(--subtitle-color)',
};
