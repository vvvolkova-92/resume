import styled from "styled-components";
import image from "../../images/checkboxIcon.svg";
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
  color: ${ ({theme}) => theme.textColor};
`;

export const ContainerLeft = styled.div`
  flex-basis: 230px;
`;

export const ContainerRight = styled.div`
  flex-basis: 475px;
`;

export const Photo = styled.img.attrs(props => ({
  src: props.src,
}))`
  padding-bottom: 10px;
  width: 230px;
  height: 230px;
  object-fit: cover;
  object-position: center center;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  padding: 0;
  margin: 5px 0 5px 0;
  list-style-type: none;
  
  & > li {
   line-height: 22px;
  }
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
        max-width: 430px;
        margin: 0;
      }
    }
  }
`;

export const Icon = styled.div`
  background-image: url(${image});
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
`;