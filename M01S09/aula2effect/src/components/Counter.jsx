import { useEffect, useState } from "react";

function Counter() {
  const [contador, setContador] = useState(0);
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    // roda quando o componente entra na tela
    console.count("MOTOU_O_COMPONENTE");

    // busca dados em uma API
    const buscaPersoagens = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        console.log(data.results);
        setPersonagens(data.results);
      } catch (e) {
        console.error(e);
      }
    };
    buscaPersoagens();

    return () => {
      // roda quando o componente sai da tela
      console.count("DESMOTOU_O_COMPONENTE");
    };
  }, []);

  useEffect(() => {
    console.log(`TEMOS ${personagens.length} PERSOAGENS`);
  }, [personagens]);

  console.count("RODOU_LIFE_CYCLE");

  return (
    <div className="Counter" style={{ textAlign: "center" }}>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <ul>
        {personagens.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
