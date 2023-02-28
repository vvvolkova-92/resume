import {createContext, useState, useMemo, FC, useContext, ReactNode} from "react";
import {initialData} from "../utils/constants";

export const MyContext = createContext();
export function useData() {
  return useContext(MyContext);
};
interface IData {
  data: {},
  name: string;
  photo: boolean;
  age: boolean;
  familyStatus: boolean;
  zodiac: boolean;
  telephone: boolean;
  telegram: boolean;
  github: boolean;
  linkedIn: boolean;
  email: boolean;
  hobby: boolean;
  personalQualities: boolean;
  stack: boolean;
  university: boolean;
  courses: boolean;
  projects: boolean;
  work: string;
  city: boolean;
  animals: boolean;
}
export const DataProvider:FC<{children: ReactNode}> = ({ children }) => {
  const [data, setData] = useState<IData>({
    data: initialData,
    name: '',
    photo: false,
    age: false,
    zodiac: false,
    familyStatus: false,
    telephone: true,
    telegram: false,
    github: true,
    linkedIn: false,
    email: false,
    hobby: false,
    personalQualities: true,
    stack: true,
    university: true,
    courses: false,
    projects: true,
    work: '',
    city: false,
    animals: true,
  });
  const memoData = useMemo(() => ({ data, setData }), [data]);
  return <MyContext.Provider value={memoData}>{children}</MyContext.Provider>;
}