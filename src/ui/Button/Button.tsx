import {FC, MouseEventHandler} from "react";
import {StyledButton} from "./Button-style";

interface IButtonProps {
  title: string;
  onClickHandler:  MouseEventHandler;
}
export const Button: FC<IButtonProps> = ({title, onClickHandler}) => {
  return (
    <StyledButton onClick={onClickHandler}>
      {title}
    </StyledButton>
  );
};