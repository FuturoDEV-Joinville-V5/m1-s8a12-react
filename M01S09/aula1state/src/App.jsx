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
      <button onClick={somaUmComFuncao}>+1</button>
    </div>
  );
}

export default App;
