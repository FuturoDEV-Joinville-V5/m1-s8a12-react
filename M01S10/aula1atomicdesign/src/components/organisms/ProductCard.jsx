import Typografy from "../atoms/Typografy";
import Button from "../atoms/Button";

export default function ProductCard({ product = {}, addToCart = () => {} }) {
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
      <Button text="Adicinar ao carrinho" onClick={addToCart} />
    </div>
  );
}
