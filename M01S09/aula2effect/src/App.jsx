import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.count("EXECUTOU_O_EFFECT");
  }, []);

  console.count("RODOU_LIFE_CYCLE");

  return (
    <div className="App">
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}

export default App;
