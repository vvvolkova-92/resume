import {FC, Fragment} from "react";
import {
  Caption, Contacts, ContainerLeft, ContainerRight, Icon, ItemBlockWrapper,
  List, ListItem, ListItemWithIcon, Photo, Qr, QrList, Title, Wrapper
} from "./Resume-style";
import noPhoto from "../../images/no-photo.jpg";
import {useData} from "../../hooks/useData";
import {ToolTip} from "../../ui/ToolTip/ToolTip";
import {ToolTipZodiac} from "../../utils/constants";
import {IEducationItem, IProject, ItemBlockProps, IWorks} from "../../types/types";
export const ItemBlock: FC<Partial<ItemBlockProps>> = ({
  name,
  year,
  specialization,
  city,
  status,
  organization,
  about,
  description,
  stack,
  link,
  type}) => {

  const isWork = type === 'work';
  const isStudy = type === 'study';
  const isProject = type === 'project';
  return <>
    {isWork && <ItemBlockWrapper>
      <h4>{organization}</h4>
      <span>{name}</span>
      <span>{year}</span>
      <ul>
        {about?.map((item, index) => <div key={`${type}-${index}`}>
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
      <p>{stack}</p>
      <a href={link} target="_blank">{link}</a>
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
              {data.telephone && <a href={`tel:${personalInformation.telephone}`}>
                <li>{personalInformation.telephone}</li>
              </a>}
              {data.email && emeils.map((email, index) => <a href={`mailto:${email}&body=Какое крутое резюме?subject=Оффер сразу =)`}>
                <li key={`${index}-${email}`}>{email}</li>
              </a>)}
              {isQrcods && <>
                <QrList>
                  {data.telegram && <>
                    <ListItem>
                      <Caption href={personalInformation.telegram} target={"_blank"}>Telegram</Caption>
                      <a target="_blank" href={personalInformation.telegram}>
                        <Qr src={personalInformation.telegramQr}/>
                      </a>
                    </ListItem>
                  </>}
                  {data.github && <>
                    <ListItem>
                      <Caption href={personalInformation.github} target={"_blank"}>GitHub</Caption>
                      <a target="_blank" href={personalInformation.github}>
                        <Qr src={personalInformation.githubQr}/>
                      </a>
                    </ListItem>
                  </>}
                  {data.linkedIn && <>
                    <ListItem>
                      <Caption href={personalInformation.linkedIn} target={"_blank"}>LinkedIn</Caption>
                      <a target="_blank" href={personalInformation.linkedIn}>
                        <Qr src={personalInformation.linkedInQr}/>
                      </a>
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
              {personalQualities.map((item, index) => <ListItemWithIcon key={index}>
                  <Icon />
                  <li>{item}</li>
              </ListItemWithIcon>)}
            </List>
          </>}
          {data.hobby && <>
            <Title>Хобби</Title>
            <List>
              {data.hobby && hobby.map((item, index) => <ListItemWithIcon key={index}>
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
            {universities.map((univer, index) => <ItemBlock
              type={'study'}
              name={univer.name}
              year={univer.year}
              specialization={univer.specialization}
              city={univer.city}
              status={univer.status}
              key={index}
            />)}
          </List>
        </>}
        {data.projects && <>
          <Title>Учебные и pet-проекты</Title>
          <List>
            {projects.map((project, index) => <ItemBlock
              type={'project'}
              name={project.name}
              description={project.description}
              stack={project.stack}
              link={project.link}
              key={index}
            />)}
          </List>
        </>}
        <Title>Опыт работы</Title>
        <List>
          {isAllWorks && allWorks.map((work, index) => <ItemBlock
            type={'work'}
            name={work.name}
            year={work.year}
            organization={work.organization}
            about={work.about}
            key={index}
          />)}
          {isITWorks && itWork.map((work, index) => <ItemBlock
            type={'work'}
            name={work.name}
            year={work.year}
            organization={work.organization}
            about={work.about}
            key={index}
          />)}
        </List>
      </ContainerRight>
    </Wrapper>
  );
};