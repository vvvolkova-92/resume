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
  });
  const memoData = useMemo(() => ({ data, setData }), [data]);
  return <MyContext.Provider value={memoData}>{children}</MyContext.Provider>;
}