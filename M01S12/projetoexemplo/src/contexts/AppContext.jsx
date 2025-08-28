import { createContext, useState } from "react";
import { fakeUsersData } from "./fakeUsersData";

export const initialAppDataValue = {
  logedUser: null,
  users: fakeUsersData,
  workshops: [],
};

export const AppContext = createContext(initialAppDataValue);

export function AppContextProvider({ children }) {
  const [appData, setAppData] = useState(initialAppDataValue);

  return <AppContext value={[appData, setAppData]}>{children}</AppContext>;
}
