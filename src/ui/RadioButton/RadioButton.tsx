import {ChangeEventHandler, FC} from "react";
import {RadioButtonWrapper} from "./RadioButton-style";
interface IRadioButtonProps {
  label: string;
  id: string;
  name: string;
  onChange:  ChangeEventHandler<HTMLInputElement>;
  checked?: boolean
}
export const RadioButton: FC<IRadioButtonProps> = ({label, id, name, onChange, checked}) => {
  return (
    <RadioButtonWrapper>
      <input type="radio" id={id} onChange={onChange} name={name} defaultChecked={checked}/>
      <label htmlFor={id}>{label}</label>
    </RadioButtonWrapper>
  );
};