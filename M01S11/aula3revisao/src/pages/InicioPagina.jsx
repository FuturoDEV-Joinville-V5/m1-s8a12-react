import { useEffect, useRef, useState } from "react";
import ConjuntoCampo from "../components/molecules/ConjuntoCampo";

function InicioPage() {
  // maneira de persistir valores e monitorar mudanças
  const [nome, setNome] = useState("");

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

  console.log("RODOU LIFE CICLE", batataRef.current);

  return (
    <div className="InicioPage">
      <h1 ref={batataRef}>Revisao React</h1>
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
