import { useState, useContext } from "react";
import { AppContext } from "../AppContext";

function HomePage() {
  const { theme, toggleTheme } = useContext(AppContext);

  const [batata, setBatata] = useState("primeiro valor");

  console.log({ batata });

  return (
    <div className="HomePage">
      <p>HomePage tema: {theme}</p>
      <button onClick={toggleTheme}>TrocaTema</button>
      <button onClick={() => setBatata("novo valor")}>TrocaValorState</button>
    </div>
  );
}

export default HomePage;
