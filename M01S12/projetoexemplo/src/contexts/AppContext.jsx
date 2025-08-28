import { createContext, useState } from "react";

export const initialAppDataValue = {
  logedUser: null,
  users: [],
  workshops: [],
};

export const AppContext = createContext(initialAppDataValue);

export function AppContextProvider({ children }) {
  const [appData, setAppData] = useState(initialAppDataValue);

  return <AppContext value={[appData, setAppData]}>{children}</AppContext>;
}
