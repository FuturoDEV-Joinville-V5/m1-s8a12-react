import { useEffect, useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import ConjuntoCampo from "../components/molecules/ConjuntoCampo";

function InicioPage() {
  // maneira de persistir valores e monitorar mudanças
  //const [nome, setNome] = useState("");
  const [nome, setNome] = useLocalStorage({ key: "nome", value: "" });

  // maneira de persistir valores sem monitorar mudanças
  // acessa ou altera valores pelo .current
  const batataRef = useRef("VALOR");

  useEffect(() => {
    console.log("MONTOU O COMPONENTE");
    return () => {
      console.log("DESMONTOU O COMPONENTE");
    };
  }, []);

  useEffect(() => {
    console.log("NOME MUDOU");
  }, [nome]);

  console.log("RODOU LIFE CICLE", batataRef.current.value);

  return (
    <div className="InicioPage">
      <h1>Revisao React</h1>
      <input ref={batataRef} type="text" />
      <ConjuntoCampo
        rotulo="Nome"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
}

export default InicioPage;
