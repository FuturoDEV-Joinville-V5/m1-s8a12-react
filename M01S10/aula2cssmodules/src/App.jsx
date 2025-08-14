import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button text="Primário" />
      <Button text="Secundário" variat="secondary" />
    </div>
  );
}

export default App;
