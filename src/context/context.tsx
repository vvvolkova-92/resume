import {createContext, useState, useMemo, FC, useContext, ReactNode} from "react";
import {initialData} from "../utils/constants";
import {IData} from "../types/types";

export const MyContext = createContext();
export const DataProvider:FC<{children: ReactNode}> = ({ children }) => {
  const [data, setData] = useState<IData>({
    data: initialData,
    name: 'shortName',
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
    work: 'allWorks',
    city: false,
    animals: true,
  });
  const memoData = useMemo(() => ({ data, setData }), [data]);
  return <MyContext.Provider value={memoData}>{children}</MyContext.Provider>;
}