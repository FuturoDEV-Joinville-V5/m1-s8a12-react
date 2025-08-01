import { useEffect, useState } from "react";
import Header from "../components/Header";

function HomePage() {
  // este valor persiste entre os ciclos de vida
  const [batataFrita, setBatataFrita] = useState(0);

  function aumentaValor() {
    // esta função altera o valor do state
    setBatataFrita(batataFrita + 1);
  }

  useEffect(() => {
    // rodar código na montagem do componente
    console.log("MONTA_COMPONENTE");

    return () => {
      // rodar código na desmontagem do componente
      console.log("DESMONTA_COMPONENTE");
    };
  }, []);

  useEffect(() => {
    console.log("BATATA_FRITA_MUDOU");
  }, [batataFrita]);

  console.count("CICLO_DE_VIDA");

  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <p>Página Inicial</p>
      <button onClick={aumentaValor}>{batataFrita}</button>
    </div>
  );
}

export default HomePage;
