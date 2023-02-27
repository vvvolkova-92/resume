import {FC, useState} from "react";
import {
  BorderContainer,
  Container,
  Table,
  Text
} from "./PersonalInformation-style";
import {Checkbox} from "../../ui/Checkbox/Checkbox";
import {RadioButton} from "../../ui/RadioButton/RadioButton";
import {MyContext, useData} from "../../context/context";

export const PersonalInformation: FC = () => {
  const { data, setData } = useData();
  const [checked, setChecked] = useState(true);
  const onClickRadioBtn = (event: { target: HTMLInputElement; }) => {
    event.target.id === 'shortName' ? setData({...data, name: 'shortName'}) : setData({...data, name: 'fullName'});
    setChecked(prev => !prev);
  };

  const onClickCheckbox = (event: { target: HTMLInputElement; }) => {
    event.target.id === 'shortName' ? setData({...data, name: 'shortName'}) : setData({...data, name: 'fullName'});
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
        <BorderContainer title={"Контакты"}>
          <Checkbox id={'telephone'} label={'Номер телефона'} checked={data.telephone} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'telegram'} label={'Телеграм'} checked={data.telegram} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'github'} label={'GitHub'} checked={data.github} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'linkedIn'} label={'LinkedIn'} checked={data.linkedIn} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'email'} label={'Мыло (по старинке)'} checked={data.email} onClickCheckbox={onClickCheckbox}/>
        </BorderContainer>
      </Table>
    </>
  );
};