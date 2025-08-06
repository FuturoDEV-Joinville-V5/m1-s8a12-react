import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [entrada, setEntrada] = useState("");

  const [tarefas, setTarefas] = useState([]);

  const salvaNoLocalStorage = (listaParaSalvar) => {
    const listaEmJSON = JSON.stringify(listaParaSalvar);
    localStorage.setItem("tarefas", listaEmJSON);
  };

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
    salvaNoLocalStorage(novoTarefas);
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
    salvaNoLocalStorage(novoTarefas);
  };

  const apagaTarefa = (tarefaParaApagar) => {
    const novoTarefas = tarefas.filter(
      (tarefa) => tarefa.id !== tarefaParaApagar.id
    );
    setTarefas(novoTarefas);
    salvaNoLocalStorage(novoTarefas);
  };

  // exemplo de uso de useEffect
  useEffect(() => {
    const tarefasSalvasJSON = localStorage.getItem("tarefas");
    if (tarefasSalvasJSON) {
      const tarefasSalvas = JSON.parse(tarefasSalvasJSON);
      setTarefas(tarefasSalvas);
    }
  }, []);

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
