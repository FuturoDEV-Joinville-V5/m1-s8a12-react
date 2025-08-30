function WorkshopItem({ workshop, allowEdit = false }) {
  // criação de variáveis por destructurig
  const { name, logradouro, numero, bairro, cidade } = workshop;

  return (
    <li>
      <h4>{name}</h4>
      <p>
        Endereço: {logradouro}, {numero}, {bairro}, {cidade}
      </p>
      {allowEdit && (
        <>
          {/* react fragment <></> permite juntar vários elementos sem criar um elemento extra */}
          <button>Editar</button>
          <button>Excluir</button>
        </>
      )}
    </li>
  );
}

export default WorkshopItem;
