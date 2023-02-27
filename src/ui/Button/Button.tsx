import {FC, MouseEventHandler} from "react";
import {StyledButton} from "./Button-style";
import {Arrow} from "../../utils/constants";

interface IButtonProps {
  title: string;
  onClickHandler:  MouseEventHandler;
  icon: Arrow;
}
export const Button: FC<IButtonProps> = ({title, onClickHandler, icon}) => {
  return (
    <StyledButton onClick={onClickHandler} icon={icon}>
      {title}
    </StyledButton>
  );
};