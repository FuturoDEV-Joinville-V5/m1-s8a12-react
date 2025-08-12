import Typografy from "../atoms/Typografy";
import Button from "../atoms/Button";

export default function ProductCard({ product = {}, onAddToCart = () => {} }) {
  const renderStars = (rating) => {
    let stars = "";
    for (let i = 0; i < rating; i += 1) {
      stars += "⭐";
    }
    return stars;
  };

  return (
    <div className="ProductCard">
      <Typografy text={product.name} />
      <div>{renderStars(product.rating)}</div>
      <Button text="Adicinar ao carrinho" onClick={onAddToCart} />
    </div>
  );
}
