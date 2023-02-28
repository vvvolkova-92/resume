import {FC} from "react";
import {
  About,
  Caption,
  Contacts,
  Education, Icon, ItemBlockWrapper,
  List,
  ListItem, ListItemWithIcon,
  PersonalInformation,
  Photo, Projects,
  Qr,
  QrList,
  Title, Work,
  Wrapper
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

  return (
    <Wrapper>
      <Photo src={data.photo ? personalInformation.photo : noPhoto}/>
      <PersonalInformation>
        <Title>Персональная информация</Title>
        <List>
          <li>{isFullName && personalInformation.fullName}</li>
          <li>{isShortName && personalInformation.shortName}</li>
          <li>{data.city && personalInformation.city}</li>
          <li>{data.age && `${personalInformation.age} лет`}</li>
          <li>{data.zodiac && <ToolTip title={personalInformation.zodiac} content={ToolTipZodiac}/>}</li>
          <li>{data.stack && `Стек: ${personalInformation.stack.toString()}`}</li>
        </List>
      </PersonalInformation>
      <Contacts>
        <Title>Контакты</Title>
        <List>
          <li>{data.telephone && personalInformation.telephone}</li>
          {data.email && emeils.map(email => <li>{email}</li>) }
          <QrList>
            <ListItem>
              { data.telegram &&
                <>
                  <Caption href={personalInformation.telegram} target={"_blank"}>Telegram</Caption>
                  <Qr src={personalInformation.telegramQr}/>
                </>
              }
            </ListItem>
            <ListItem>
              { data.github &&
                <>
                  <Caption href={personalInformation.github} target={"_blank"}>GitHub</Caption>
                  <Qr src={personalInformation.githubQr}/>
                </>
              }
            </ListItem>
            <ListItem>
              { data.linkedIn &&
                <>
                  <Caption href={personalInformation.linkedIn} target={"_blank"}>LinkedIn</Caption>
                  <Qr src={personalInformation.linkedInQr}/>
                </>
              }
            </ListItem>
          </QrList>
        </List>
      </Contacts>
      {data.university && <>
        <Education>
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
        </Education>
      </>}
      {data.projects && <>
          <Projects>
            <Title>Учебные и pet-проекты</Title>
            <List>
              {projects.map(project => <ItemBlock
                type={'project'}
                name={project.name}
                description={project.description}
              />)}
            </List>
          </Projects>
        </>}
      <Work>
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
      </Work>
      <About>
        {data.personalQualities && <>
          <Title>Личные качества</Title>
          <List>
            {personalQualities.map(item => <ListItemWithIcon>
                <Icon />
                <li>{item}</li>
              </ListItemWithIcon>
            )}
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
      </About>
    </Wrapper>
  );
};