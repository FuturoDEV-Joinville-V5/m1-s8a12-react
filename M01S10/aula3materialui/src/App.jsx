import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import AtmButton from "./components/AtmButton";
import "./App.css";

const customTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <AtmButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
