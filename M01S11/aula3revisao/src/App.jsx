import { useState } from "react";
import InicioPage from "./pages/InicioPagina";

import "./App.css";

function App() {
  const [exibePagina, setExibePagina] = useState(true);

  const trocaExibePagina = () => {
    setExibePagina((valorAtual) => !valorAtual);
  };

  return (
    <div className="App">
      {exibePagina && <InicioPage />}
      <button onClick={trocaExibePagina}>Troca</button>
    </div>
  );
}

export default App;
