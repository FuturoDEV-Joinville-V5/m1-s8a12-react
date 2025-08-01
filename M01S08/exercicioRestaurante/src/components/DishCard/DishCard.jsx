import "./DishCard.css";

function DishCard({ name = "", price = 0, imgSrc = null }) {
  return (
    <div className="DishCard">
      <h3>{name}</h3>
      <p>R$ {price.toFixed(2)}</p>
      <img src={imgSrc} alt={`Foto do ${name}`} />
    </div>
  );
}

export default DishCard;
