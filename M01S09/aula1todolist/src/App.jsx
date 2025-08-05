import { useState } from "react";

import "./App.css";

function App() {
  const listaTarefas = [
    { id: 1, description: "item de tarefa 1" },
    { id: 2, description: "item de tarefa 2" },
    { id: 3, description: "item de tarefa 3" },
  ];

  return (
    <div>
      <ul>
        {listaTarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
