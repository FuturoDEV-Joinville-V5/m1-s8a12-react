import RotuloCampo from "../atoms/RotuloCampo";
import CampoTexto from "../atoms/CampoTexto";

function ConjuntoCampo({ rotulo = "", id, value = "", onChange = () => {} }) {
  return (
    <div>
      <RotuloCampo texto={rotulo} idCampo={id} />
      <CampoTexto id={id} value={value} onChange={onChange} />
    </div>
  );
}

export default ConjuntoCampo;
