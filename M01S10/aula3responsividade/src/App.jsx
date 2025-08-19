import { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import AtmButton from "./components/AtmButton";
import "./App.css";

const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

function App() {
  const preffersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const [isDark, setIsDark] = useState(preffersDark);

  const theme = useTheme();

  // alguns exemplos de consulta de breakpoints
  const isSmallerThanSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmOrUp = useMediaQuery(theme.breakpoints.up("sm"));
  const isBetweenSmAndMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));

  console.log({
    isSmallerThanSm,
    isSmOrUp,
    isBetweenSmAndMd,
    isSm,
    preffersDark,
  });

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
      <Typography>
        {isSmallerThanSm ? "Tela Pequena" : "Tela Grande"}
      </Typography>

      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          1
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          2
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          3
        </Grid>
      </Grid>

      <br />
      <AtmButton onClick={() => setIsDark(!isDark)}>
        Alterna Modo Dark/Light
      </AtmButton>
    </ThemeProvider>
  );
}

export default App;
