import { useState } from "react";

import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  // somando em cima da variavel contador
  const somaUm = () => {
    setContador(contador + 1);
  };

  // somando em cima do valor do state que vem no parametro da função
  const somaUmComFuncao = () => {
    setContador((valorAtual) => valorAtual + 1);
  };

  return (
    <div>
      <p>Contagem total: {contador}</p>
      <button onClick={somaUm}>+1</button>
      <button onClick={somaUmComFuncao}>+1s</button>
      <button onClick={() => setContador(0)}>reset</button>
    </div>
  );
}

export default App;
