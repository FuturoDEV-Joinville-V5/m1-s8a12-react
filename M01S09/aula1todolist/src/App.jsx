import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [entrada, setEntrada] = useState("");

  const [tarefas, setTarefas] = useState([
    { id: 1, description: "tarefa inicial exemplo", done: false },
  ]);

  const [contador, setContador] = useState(0);

  const atualizaEntrada = (event) => {
    setEntrada(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), // milissegundos desde 1/1/1970 00h00
      description: entrada,
      done: false,
    };
    const novoTarefas = [...tarefas, novaTarefa];
    setTarefas(novoTarefas);
    setEntrada("");
  };

  const alternaFeito = (tarefaParaMudar) => {
    const novoTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === tarefaParaMudar.id) {
        return { ...tarefa, done: !tarefa.done };
      }
      return tarefa;
    });
    setTarefas(novoTarefas);
  };

  const apagaTarefa = (tarefaParaApagar) => {
    const novoTarefas = tarefas.filter(
      (tarefa) => tarefa.id !== tarefaParaApagar.id
    );
    setTarefas(novoTarefas);
  };

  // exemplo de uso de useEffect, mas poderia ser resilvido
  // com o tarefas.length direto no JSX
  useEffect(() => {
    setContador((prevState) => prevState + 1);
  }, [tarefas]);

  return (
    <div>
      <h1>todolist</h1>
      <input type="text" value={entrada} onChange={atualizaEntrada} />
      <button onClick={adicionaTarefa}>+</button>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <input
              type="checkbox"
              checked={tarefa.done}
              onChange={() => alternaFeito(tarefa)}
            />
            <p>{tarefa.description}</p>
            <button onClick={() => apagaTarefa(tarefa)}>🗑️</button>
          </li>
        ))}
      </ul>
      <p>{tarefas.filter((t) => !t.done).length} tarefas pendentes</p>
      <p>{tarefas.filter((t) => t.done).length} tarefas feitas</p>
    </div>
  );
}

export default App;
