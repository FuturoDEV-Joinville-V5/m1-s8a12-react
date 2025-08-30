function WorkshopItem({ workshop }) {
  return (
    <li>
      <h4>{workshop.name}</h4>
      <p>
        Endereço: {workshop.logradouro}, {workshop.numero}, {workshop.bairro}
      </p>
    </li>
  );
}

export default WorkshopItem;
