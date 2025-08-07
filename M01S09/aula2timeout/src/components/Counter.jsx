import { useEffect, useState } from "react";

function Counter() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // roda quando o componente entra na tela
    console.count("MOTOU_O_COMPONENTE");

    const idInterval = setInterval(() => {
      console.count("EXECUCAO_INTERVALO");
      setContador((prevState) => prevState + 1);
    }, 1000);

    return () => {
      // roda quando o componente sai da tela
      console.count("DESMOTOU_O_COMPONENTE");
      clearInterval(idInterval);
    };
  }, []);

  console.count("RODOU_LIFE_CYCLE");

  return (
    <div className="Counter" style={{ textAlign: "center" }}>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}

export default Counter;
