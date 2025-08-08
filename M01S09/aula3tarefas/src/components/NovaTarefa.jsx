import { useRef } from "react";

function NovaTarefa({ aoSalvar }) {
  const descricaoRef = useRef(null);
  const periodoRef = useRef(null);

  const executaAdicionar = () => {
    const valorDescricao = descricaoRef.current.value;
    const valorPeriodo = periodoRef.current.value;

    if (valorDescricao && valorPeriodo) {
      const novaTarefa = {
        id: Date.now(),
        descricao: valorDescricao,
        periodo: valorPeriodo,
      };

      aoSalvar(novaTarefa);
      descricaoRef.current.value = "";
      alert("Tarefa criada!");
    } else {
      alert("Informe a descrição e o período da nova tarefa.");
    }
  };

  return (
    <div className="NovaTarefa">
      <input
        ref={descricaoRef}
        type="text"
        id="descricao"
        name="descricao"
        placeholder="Descrição"
      />
      <select ref={periodoRef} id="periodo" name="periodo">
        <option value="manha">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>
      </select>
      <button onClick={executaAdicionar}>Adicionar</button>
    </div>
  );
}

export default NovaTarefa;
