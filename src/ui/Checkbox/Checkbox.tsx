import {ChangeEventHandler, FC} from "react";
import {CheckboxWrapper} from "./Checkbox-style";
interface ICheckboxProps {
  label: string;
  id: string;
  onClickCheckbox:  ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
}
export const Checkbox: FC<ICheckboxProps> = ({label, id, onClickCheckbox, checked}) => {
  return (
    <CheckboxWrapper>
      <input type={"checkbox"} id={id} name={id} onChange={onClickCheckbox} defaultChecked={checked}/>
      <label htmlFor={id}>{label}</label>
    </CheckboxWrapper>
  );
};