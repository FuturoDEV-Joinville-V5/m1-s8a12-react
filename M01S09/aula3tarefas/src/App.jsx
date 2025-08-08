import { useState } from "react";
import NovaTarefa from "./components/NovaTarefa";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);

  console.log({ tarefas });

  const salvarNovaTarefa = (novaTarefa) => {
    setTarefas((tarefasAtual) => [...tarefasAtual, novaTarefa]);
  };

  return (
    <div>
      <NovaTarefa aoSalvar={salvarNovaTarefa} />
    </div>
  );
}

export default App;
