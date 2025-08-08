import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // state para input controlado
  const [nome, setNome] = useState("");
  // ref para input não controlado
  const sobrenomeRef = useRef(null);

  useEffect(() => {
    // beneficio do componente controlado
    // poder usar efeitos a cada mudança
    console.log("mexeu no nome");
  }, [nome]);

  const lidarComEnvio = () => {
    // valor controlado já disponível no state
    const valorNome = nome;
    // valor não controlado é buscado na referencia do input
    const valorSobrenome = sobrenomeRef.current.value;

    console.log({ valorNome, valorSobrenome });
  };

  return (
    <div>
      {/* input controlado */}
      <label htmlFor="nome">Nome:</label>
      <input
        id="nome"
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br />
      {/* input não controlado */}
      <label htmlFor="sobrenome">Sobrenome:</label>
      <input ref={sobrenomeRef} id="sobrenome" type="text" />
      <button onClick={lidarComEnvio}>Enviar</button>
    </div>
  );
}

export default App;
