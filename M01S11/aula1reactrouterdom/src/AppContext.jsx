import { createContext, useState } from "react";

const LIGHT = "light";
const DARK = "dark";

export const AppContext = createContext({
  theme: LIGHT,
  toggleTheme: () => {},
});

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(LIGHT);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === LIGHT ? DARK : LIGHT));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
