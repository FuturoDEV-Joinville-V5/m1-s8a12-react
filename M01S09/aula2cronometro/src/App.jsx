import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(false);

  const aumentaSegundos = () => {
    setSegundos((prevState) => prevState + 1);
  };

  useEffect(() => {
    let idInterval = null;

    if (rodando) {
      idInterval = setInterval(aumentaSegundos, 1000);
    }

    return () => {
      if (idInterval) {
        clearInterval(idInterval);
      }
    };
  }, [rodando]);

  useEffect(() => {
    document.title = `Segundos: ${segundos}`;
  }, [segundos]);

  const aoIniciar = () => {
    setRodando(true);
  };

  const aoPausar = () => {
    setRodando(false);
  };

  const aoZerar = () => {
    setRodando(false);
    setSegundos(0);
  };

  return (
    <div className="App">
      <p>{segundos}</p>
      <button onClick={aoIniciar}>iniciar</button>
      <button onClick={aoPausar}>pausar</button>
      <button onClick={aoZerar}>zerar</button>
    </div>
  );
}

export default App;
