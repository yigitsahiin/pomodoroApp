import { createContext, useContext } from "react";

export const GlobalStateContext = createContext(null);

export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);

  if (!context) throw Error("Global state context is out of scope");
  return context;
};
