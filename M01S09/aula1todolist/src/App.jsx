import { useState } from "react";

import "./App.css";

function App() {
  const [entrada, setEntrada] = useState("");
  const [tarefas, setTarefas] = useState([
    { id: 1, description: "tarefa inicial exemplo" },
  ]);

  const atualizaEntrada = (event) => {
    setEntrada(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      description: entrada,
    };
    const novoTarefas = [...tarefas, novaTarefa];
    setTarefas(novoTarefas);
    setEntrada("");
  };

  return (
    <div>
      <h1>todolist</h1>
      <input type="text" value={entrada} onChange={atualizaEntrada} />
      <button onClick={adicionaTarefa}>+</button>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
