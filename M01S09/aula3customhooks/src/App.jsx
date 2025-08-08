import { useEffect, useState } from "react";
import useInterval from "./hooks/useInterval";
import useToggle from "./hooks/useToggle";
import { useLocalStorage } from "./hooks/useStorage";
import "./App.css";

function App() {
  const [segundos, setSegundos] = useLocalStorage("segudos", 0);
  const [rodando, toggleRodando] = useToggle(false);

  const aumentaSegundos = () => {
    setSegundos((prevState) => prevState + 1);
  };

  const { reset, clear } = useInterval(rodando ? aumentaSegundos : null, 1000);

  useEffect(() => {
    if (rodando) {
      reset();
    }
    return clear;
  }, [rodando]);

  useEffect(() => {
    document.title = `Segundos: ${segundos}`;
  }, [segundos]);

  const aoZerar = () => {
    setSegundos(0);
  };

  return (
    <div className="App">
      <p>{segundos}</p>
      <button onClick={toggleRodando}>{rodando ? "pausar" : "iniciar"}</button>
      <button onClick={aoZerar}>zerar</button>
    </div>
  );
}

export default App;
