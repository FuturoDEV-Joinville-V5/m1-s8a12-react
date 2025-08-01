import { use, useState } from "react";
import Header from "../components/Header";

function HomePage() {
  const [batataFrita, setBatataFrita] = useState(0);

  function aumentaValor() {
    setBatataFrita(batataFrita + 1);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Header />
      <p>Página Inicial</p>
      <button onClick={aumentaValor}>{batataFrita}</button>
    </div>
  );
}

export default HomePage;
