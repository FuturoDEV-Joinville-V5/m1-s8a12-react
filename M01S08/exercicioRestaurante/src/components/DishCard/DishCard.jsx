import "./DishCard.css";
import SauceList from "../SauceList/SauceList";

function DishCard({ name = "", price = 0, sauces = [], imgSrc = null }) {
  return (
    <div className="DishCard">
      <div>
        <h3>{name}</h3>
        <p>R$ {price.toFixed(2)}</p>
        <SauceList sauces={sauces} />
      </div>
      <img src={imgSrc} alt={`Foto do ${name}`} />
    </div>
  );
}

export default DishCard;
