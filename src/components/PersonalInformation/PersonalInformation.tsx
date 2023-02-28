import {FC, useState} from "react";
import {
  BorderContainer,
  Table,
  Text
} from "./PersonalInformation-style";
import {Checkbox} from "../../ui/Checkbox/Checkbox";
import {RadioButton} from "../../ui/RadioButton/RadioButton";
import {useData} from "../../context/context";

export const PersonalInformation: FC = () => {
  const { data, setData } = useData();
  const [checked, setChecked] = useState(true);
  const onClickRadioBtn = (event: { target: HTMLInputElement; }) => {
    event.target.id === 'shortName' ? setData({...data, name: 'shortName'}) : setData({...data, name: 'fullName'});
    setChecked(prev => !prev);
  };

  const onClickCheckbox = (event: { target: HTMLInputElement; }) => {
    switch (event.target.id) {
      case 'photo':
        setData({...data, photo: !data.photo});
        break;
      case 'age':
        setData({...data, age: !data.age});
        break;
      case 'zodiac':
        setData({...data, zodiac: !data.zodiac});
        break;
      case 'familyStatus':
        setData({...data, familyStatus: !data.familyStatus});
        break;
      case 'hobby':
        setData({...data, hobby: !data.hobby});
        break;
      case 'personalQualities':
        setData({...data, personalQualities: !data.personalQualities});
        break;
    }
  };
  return (
    <>
      <Text>Какую персональную информацию добавить в итоговое резюме?</Text>
      <Table>
        <BorderContainer title={"ФИО"}>
          <RadioButton label={'Короткое имя'} id={'shortName'} name={'fio'} onChange={onClickRadioBtn} checked={checked}/>
          <RadioButton label={'Полное имя'} id={'fullName'} name={'fio'} onChange={onClickRadioBtn}/>
        </BorderContainer>
        <BorderContainer title={"Личные"}>
          <Checkbox id={'photo'} label={'Фото'} checked={data.photo} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'age'} label={'Возраст'} checked={data.age} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'zodiac'} label={'Знак зодиака :\'-)'} checked={data.zodiac} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'familyStatus'} label={'Семейное положение'} checked={data.familyStatus} onClickCheckbox={onClickCheckbox}/>
        </BorderContainer>
        <BorderContainer title={"О себе"}>
          <Checkbox id={'city'} label={'Город проживания'} checked={data.city} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'hobby'} label={'Хобби'} checked={data.hobby} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'personalQualities'} label={'Личные качества'} checked={data.personalQualities} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'animals'} label={'Котики или собачки?!'} checked={data.animals} onClickCheckbox={onClickCheckbox}/>
        </BorderContainer>
      </Table>
    </>
  );
};