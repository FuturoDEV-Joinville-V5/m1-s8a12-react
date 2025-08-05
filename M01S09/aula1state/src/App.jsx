import { useState } from "react";

import "./App.css";

function App() {
  const [contador, setContador] = useState(3);

  const somaUm = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contagem total: {contador}</p>
      <button onClick={somaUm}>+1</button>
    </div>
  );
}

export default App;
