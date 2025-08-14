import StarIcon from "@mui/icons-material/Star";
import Typografy from "../atoms/Typografy";
import Button from "../atoms/Button";

export default function ProductCard({ product = {}, onAddToCart = () => {} }) {
  return (
    <div className="ProductCard">
      <Typografy text={product.name} />
      <div style={{ display: "flex" }}>
        <div style={{ color: "orange" }}>
          <StarIcon />
        </div>
        {product.rating}
      </div>
      <Button text="Adicinar ao carrinho" onClick={onAddToCart} />
    </div>
  );
}
