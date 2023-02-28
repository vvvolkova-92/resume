import {useContext} from "react";
import {MyContext} from "../context/context";
export function useData() {
  return useContext(MyContext);
};