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

  const updateAppData = (newAppData) => {
    setAppData((currentAppData) => ({ ...currentAppData, ...newAppData }));
  };

  return <AppContext value={[appData, updateAppData]}>{children}</AppContext>;
}
