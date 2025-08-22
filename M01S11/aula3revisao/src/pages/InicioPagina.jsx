import { useEffect, useState } from "react";
import ConjuntoCampo from "../components/molecules/ConjuntoCampo";

function InicioPage() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log("MONTOU O COMPONENTE");
    return () => {
      console.log("DESMONTOU O COMPONENTE");
    };
  }, []);

  console.log("RODOU LIFE CICLE");

  return (
    <div className="InicioPage">
      <h1>Revisao React</h1>
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
