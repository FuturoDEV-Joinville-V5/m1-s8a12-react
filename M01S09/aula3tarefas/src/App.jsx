import { useState } from "react";
import NovaTarefa from "./components/NovaTarefa";
import Tarefas from "./components/Tarefas";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);

  console.log({ tarefas });

  const salvarNovaTarefa = (novaTarefa) => {
    setTarefas((tarefasAtual) => [...tarefasAtual, novaTarefa]);
  };

  const alteraFeito = (idTarefa) => {
    const novaTarefas = tarefas.map((t) => {
      if (t.id === idTarefa) {
        const novaT = {
          ...t,
          feito: !t.feito,
        };
        return novaT;
      }
      return t;
    });
    setTarefas(novaTarefas);
  };

  return (
    <div>
      <NovaTarefa aoSalvar={salvarNovaTarefa} />
      <Tarefas lista={tarefas} aoCheckar={alteraFeito} />
    </div>
  );
}

export default App;
