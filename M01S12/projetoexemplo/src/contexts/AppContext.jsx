import { createContext, useEffect, useState } from "react";
import { fakeUsersData, fakeWorkshopsData } from "./fakeData";

export const initialAppDataValue = {
  logedUser: null,
  users: fakeUsersData,
  workshops: fakeWorkshopsData,
};

export const AppContext = createContext(initialAppDataValue);

export function AppContextProvider({ children }) {
  const [appData, setAppData] = useState(() => {
    const appDataLocal = localStorage.getItem("appData");
    if (appDataLocal) {
      return JSON.parse(appDataLocal);
    }
    return initialAppDataValue;
  });

  useEffect(() => {
    const newAppDataLocal = JSON.stringify(appData);
    localStorage.setItem("appData", newAppDataLocal);
  }, [appData]);

  const updateAppData = (newAppData) => {
    setAppData((currentAppData) => ({ ...currentAppData, ...newAppData }));
  };

  return <AppContext value={[appData, updateAppData]}>{children}</AppContext>;
}
