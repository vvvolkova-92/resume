import {FC} from "react";
import {
  Caption, Contacts, ContainerLeft, ContainerRight, Icon, ItemBlockWrapper,
  List, ListItem, ListItemWithIcon, Photo, Qr, QrList, Title, Wrapper
} from "./Resume-style";
import noPhoto from "../../images/no-photo.jpg";
import {useData} from "../../hooks/useData";
import {ToolTip} from "../../ui/ToolTip/ToolTip";
import {ToolTipZodiac} from "../../utils/constants";
import {IEducationItem, IProject, IWorks} from "../types/types";

interface ItemBlockProps {
  type: 'work' | 'study' | 'project';
  name: string;
  year:string;
  specialization: string;
  city: string;
  status: string;
  organization: string;
  about: string[];
  description: string;
}
export const ItemBlock: FC<Partial<ItemBlockProps>> = ({name, year, specialization, city, status, organization, about,description, type}) => {
  const isWork = type === 'work';
  const isStudy = type === 'study';
  const isProject = type === 'project';
  return <>
    {isWork && <ItemBlockWrapper>
      <h4>{organization}</h4>
      <span>{name}</span>
      <span>{year}</span>
      <ul>
        {about?.map(item => <div>
          <Icon />
          <li>{item}</li>
        </div>)}
      </ul>
    </ItemBlockWrapper>}
    {isStudy && <ItemBlockWrapper>
      <h4>{name}</h4>
      <span>{specialization}</span>
      <span>{city}</span>
      <span>{year} / {status}</span>
    </ItemBlockWrapper>}
    {isProject && <ItemBlockWrapper>
      <h4>{name}</h4>
      <span>{description}</span>
    </ItemBlockWrapper>}
  </>
};

export const Resume: FC = () => {
  const { data } = useData();
  const { personalInformation, education, works } = data.data;
  // вывод имени
  const isFullName = data.name === 'fullName';
  const isShortName = data.name === 'shortName';
  // почты
  const emeils: string[] = personalInformation.email;
  // учебные заведения
  const universities: IEducationItem[] = education.university;
  const projects: IProject[] = education.projects;
  // работа
  const allWorks: IWorks[] = [...works].reverse();
  const itWork = allWorks.filter(work => work.spec);
  const isAllWorks = data.work === 'allWorks';
  const isITWorks = data.work === 'ITWorks';
  //о себе
  const hobby: string[] = personalInformation.hobby;
  const personalQualities: string[] = personalInformation.personalQualities;
  const isContacts = data.telephone || data.telegram || data.github || data.linkedIn || data.email;
  const isQrcods = data.telegram || data.github || data.linkedIn;
  const isAbout = data.personalQualities || data.hobby || data.animals;
  return (
    <Wrapper>
      <ContainerLeft>
        <Photo src={data.photo ? personalInformation.photo : noPhoto}/>
        {isContacts && <>
          <Contacts>
            <Title>Контакты</Title>
            <List>
              {data.telephone && <li>{personalInformation.telephone}</li>}
              {data.email && emeils.map(email => <li>{email}</li>)}
              {isQrcods && <>
                <QrList>
                  {data.telegram && <>
                    <ListItem>
                      <Caption href={personalInformation.telegram} target={"_blank"}>Telegram</Caption>
                      <Qr src={personalInformation.telegramQr}/>
                    </ListItem>
                  </>}
                  {data.github && <>
                    <ListItem>
                      <Caption href={personalInformation.github} target={"_blank"}>GitHub</Caption>
                      <Qr src={personalInformation.githubQr}/>
                    </ListItem>
                  </>}
                  {data.linkedIn && <>
                    <ListItem>
                      <Caption href={personalInformation.linkedIn} target={"_blank"}>LinkedIn</Caption>
                      <Qr src={personalInformation.linkedInQr}/>
                    </ListItem>
                  </>}
                </QrList>
              </>}
            </List>
          </Contacts>
        </>}
        {isAbout && <>
          {data.personalQualities && <>
            <Title>Личные качества</Title>
            <List>
              {personalQualities.map(item => <ListItemWithIcon>
                  <Icon />
                  <li>{item}</li>
              </ListItemWithIcon>)}
            </List>
          </>}
          {data.hobby && <>
            <Title>Хобби</Title>
            <List>
              {data.hobby && hobby.map(item => <ListItemWithIcon>
                <Icon />
                <li>{item}</li>
              </ListItemWithIcon>)}
            </List>
          </>}
          {data.animals && <>
            <Title>Котики или собачки</Title>
            <ListItemWithIcon>
              <Icon />
              <span>{personalInformation.animals}</span>
            </ListItemWithIcon>
          </>}
        </>}
      </ContainerLeft>
      <ContainerRight>
        <Title>Персональная информация</Title>
        <List>
          <li>{isFullName && personalInformation.fullName}</li>
          <li>{isShortName && personalInformation.shortName}</li>
          <li>{data.city && personalInformation.city}</li>
          <li>{data.age && `${personalInformation.age} лет`}</li>
          <li>{data.zodiac && <ToolTip title={personalInformation.zodiac} content={ToolTipZodiac}/>}</li>
          <li>{data.stack && `Стек: ${personalInformation.stack.join(' / ')}`}</li>
        </List>
        {data.university && <>
          <Title>Учебные заведения</Title>
          <List>
            {universities.map(univer => <ItemBlock
              type={'study'}
              name={univer.name}
              year={univer.year}
              specialization={univer.specialization}
              city={univer.city}
              status={univer.status}
            />)}
          </List>
        </>}
        {data.projects && <>
          <Title>Учебные и pet-проекты</Title>
          <List>
            {projects.map(project => <ItemBlock
              type={'project'}
              name={project.name}
              description={project.description}
            />)}
          </List>
        </>}
        <Title>Опыт работы</Title>
        <List>
          {isAllWorks && allWorks.map(work => <ItemBlock
            type={'work'}
            name={work.name}
            year={work.year}
            organization={work.organization}
            about={work.about}
          />)}
          {isITWorks && itWork.map(work => <ItemBlock
            type={'work'}
            name={work.name}
            year={work.year}
            organization={work.organization}
            about={work.about}
          />)}
        </List>
      </ContainerRight>
    </Wrapper>
  );
};