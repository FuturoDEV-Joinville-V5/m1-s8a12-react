import { useState } from "react";

import "./App.css";

function App() {
  // hooks como useState precisam ser definidos na raiz do componente funcional
  // evitando que sejam invocados dentro de outras funções internas ou blocos de código
  const [contador, setContador] = useState(0);
  const [usuario, setUsuario] = useState({ nome: "Romeu", idade: 32 });
  const [aceito, setAceito] = useState(false);

  // somando em cima da variavel contador
  const somaUm = () => {
    setContador(contador + 1);
  };

  // somando em cima do valor do state que vem no parametro da função
  const somaUmComFuncao = () => {
    setContador((valorAtual) => valorAtual + 1);
  };

  const alteraUsuario = (event) => {
    setUsuario((prevState) => ({ ...prevState, nome: event.target.value }));
  };

  const alternaCaixa = (event) => {
    setAceito(event.target.checked);
  };

  console.log({ contador, usuario, aceito });

  return (
    <div>
      <p>Contagem total: {contador}</p>
      <button onClick={somaUm}>+1</button>
      <button onClick={somaUmComFuncao}>+1s</button>
      <button onClick={() => setContador(0)}>reset</button>
      <p>{usuario.nome}</p>
      <input type="text" value={usuario.nome} onChange={alteraUsuario} />
      <input type="checkbox" checked={aceito} onChange={alternaCaixa} />
    </div>
  );
}

export default App;
