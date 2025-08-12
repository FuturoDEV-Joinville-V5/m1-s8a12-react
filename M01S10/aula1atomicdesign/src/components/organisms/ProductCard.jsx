import Typografy from "../atoms/Typografy";
import Button from "../atoms/Button";

export default function ProductCard({ product = {}, addToCart = () => {} }) {
  return (
    <div className="ProductCard">
      <Typografy text={product.name} />
      <Button text="Adicinar ao carrinho" onClick={addToCart} />
    </div>
  );
}
