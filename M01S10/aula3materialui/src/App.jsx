import { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AtmButton from "./components/AtmButton";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  const customTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      background: {
        default: isDark ? "#121212" : "#f5f5f5",
        paper: isDark ? "#1e1e1e" : "#ffffff",
      },
      primary: {
        main: isDark ? "#90caf9" : "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon edge="start" color="inherit" />
          </IconButton>
          <Typography variant="h6">Nosso App</Typography>
        </Toolbar>
      </AppBar>
      <br />
      <AtmButton onClick={() => setIsDark(!isDark)}>
        Alterna Modo Dark/Light
      </AtmButton>
    </ThemeProvider>
  );
}

export default App;
