import "./Tarefas.css";

function Coluna({ titulo = "", periodo = "", lista = [], aoCheckar }) {
  const tarefasPeriodo = lista.filter((t) => t.periodo === periodo);

  return (
    <div>
      <p>{titulo}</p>
      <ul>
        {tarefasPeriodo.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.feito}
              onChange={() => aoCheckar(t.id)}
            />
            <p>{t.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tarefas({ lista = [], aoCheckar }) {
  return (
    <div className="Tarefas">
      <Coluna
        titulo="Manhã"
        periodo="manha"
        lista={lista}
        aoCheckar={aoCheckar}
      />
      <Coluna
        titulo="Tarde"
        periodo="tarde"
        lista={lista}
        aoCheckar={aoCheckar}
      />
      <Coluna
        titulo="Noite"
        periodo="noite"
        lista={lista}
        aoCheckar={aoCheckar}
      />
    </div>
  );
}

export default Tarefas;
