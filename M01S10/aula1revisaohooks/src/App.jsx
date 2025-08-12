import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [valor, setValor] = useState(0);
  const entradaRef = useRef(null);

  const somaUmValor = () => {
    // definindo valor via função callback
    setValor((prevState) => prevState + 1);
    // definindo valor via referencia
    //setValor(valor + 1);
  };

  const defineUmValor = () => {
    const novoValor = entradaRef.current.value;
    setValor(parseInt(novoValor));
  };

  useEffect(() => {
    // roda toda vez que valor muda
    document.title = `Valor: ${valor}`;
    return () => {
      // roda ates de cada nova execução deste efeito
      console.log("limpador do efeito");
    };
  }, [valor]);

  return (
    <div className="App">
      <p>Valor: {valor}</p>
      <button onClick={somaUmValor}>+1</button>
      <input ref={entradaRef} type="text" />
      <button onClick={defineUmValor}>Reseta</button>
    </div>
  );
}

export default App;
