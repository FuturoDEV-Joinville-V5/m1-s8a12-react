import NovaTarefa from "./components/NovaTarefa";
import Tarefas from "./components/Tarefas";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useLocalStorage("tarefas", []);

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
