import styled from "styled-components";
interface IWrapper {
  photo: string;
}
export const Wrapper = styled.div`
  display: grid;
  justify-items: start;
  align-items: start;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
  grid-template-areas:
  "photo personal"
  "contact education"
  "qualities projects"
  "qualities work";
  color: ${ ({theme}) => theme.textColor};
`;

export const Photo = styled.img.attrs(props => ({
  src: props.src,
}))`
  grid-area: photo;
  width: 230px;
  height: 150px;
  object-fit: cover;
  object-position: center center;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const PersonalInformation = styled.div`
  grid-area: personal;
  justify-self: start;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: contact;
`;

export const Caption = styled.a`
  margin: 10px;
  color: ${ ({theme}) => theme.linkColor};
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  line-height: 18px;
`;

export const Qr = styled.img.attrs(props => ({
  src: props.src,
}))`
  width: 100px;
  height: 100px;
`;

export const QrList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style-type: none;
  
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ListItemWithIcon = styled.div`
  margin-top: 10px;
    display: flex;
    align-items: flex-start;
    gap: 10px;

    & > li {
      display: list-item;
      max-width: 200px;
      margin-top: 3px;
  }
`;

export const Title = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 22px;
  color: ${ ({theme}) => theme.titleColor};
`;

export const Education = styled.div`
  grid-area: education;
`;

export const ItemBlockWrapper = styled.li`
  
  & > h4 {
    padding: 0;
    margin: 10px 0 10px 0;
    font-size: 18px;
  }

  & > span {
    margin-top: 3px;
    font-style: italic;
    display: block;
  }
  
  & > ul {
    margin: 10px 0 0 0;
    padding: 0;
    list-style-type: none;
    
    
    & > div {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      
      & > li {
        
        max-width: 490px;
        margin-top: 3px;
      }
    }
  }
  
`;

export const Projects = styled.div`
  grid-area: projects;
`;

export const Work = styled.div`
  grid-area: work;
`;

export const About = styled.div`
  grid-area: qualities;
`;

export const Icon = styled.div`
  background-image: url('/src/images/checkboxIcon.svg');
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
`;