function RotuloCampo({ texto = "", idCampo }) {
  return <label htmlFor={idCampo}>{texto}</label>;
}

export default RotuloCampo;
