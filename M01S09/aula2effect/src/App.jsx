import { useState } from "react";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  const [mostraContador, setMostraContador] = useState(false);

  return (
    <div className="App">
      {mostraContador ? <Counter /> : null}
      <button onClick={() => setMostraContador(!mostraContador)}>
        Controle Contador
      </button>
    </div>
  );
}

export default App;
