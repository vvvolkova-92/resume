import {FC, useState} from "react";
import {
  BorderContainer,
  Table,
  Text
} from "./ProfInformation-style";
import {Checkbox} from "../../ui/Checkbox/Checkbox";
import {RadioButton} from "../../ui/RadioButton/RadioButton";
import {useData} from "../../hooks/useData";

export const ProfInformation: FC = () => {
  const { data, setData } = useData();
  const [checked, setChecked] = useState(true);
  const onClickRadioBtn = (event: { target: HTMLInputElement; }) => {
    event.target.id === 'allWorks' ? setData({...data, work: 'allWorks'}) : setData({...data, work: 'ITWorks'});
    setChecked(prev => !prev);
  };
  const onClickCheckbox = (event: { target: HTMLInputElement; }) => {
    switch (event.target.id) {
      case 'university':
        setData({...data, university: !data.university});
        break;
      case 'courses':
        setData({...data, courses: !data.courses});
        break;
      case 'projects':
        setData({...data, projects: !data.projects});
        break;
      case 'telephone':
        setData({...data, telephone: !data.telephone});
        break;
      case 'telegram':
        setData({...data, telegram: !data.telegram});
        break;
      case 'github':
        setData({...data, github: !data.github});
        break;
      case 'linkedIn':
        setData({...data, linkedIn: !data.linkedIn});
        break;
      case 'stack':
        setData({...data, stack: !data.stack});
        break;
      case 'email':
        setData({...data, email: !data.email});
        break;
    }
  };
  return (
    <>
      <Text>Одна из самых важных частей резюме, не правда ли? Коммерческий опыт разработки важен, но все же стоит обратить внимание на учебные и пет-проекты (￢_￢)</Text>
      <Table>
        <BorderContainer title={"Образование"}>
          <Checkbox id={'university'} label={'ВУЗы'} checked={data.university} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'courses'} label={'Курсы'} checked={data.courses} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'projects'} label={'Проекты'} checked={data.projects} onClickCheckbox={onClickCheckbox}/>
          <Checkbox id={'stack'} label={'Стек технологий'} checked={data.stack} onClickCheckbox={onClickCheckbox}/>
        </BorderContainer>
        <BorderContainer title={"Опыт работы"}>
          <RadioButton label={'Вся работа'} id={'allWorks'} name={'work'} onChange={onClickRadioBtn} checked={checked}/>
          <RadioButton label={'Только IT'} id={'ITWorks'} name={'work'} onChange={onClickRadioBtn}/>
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