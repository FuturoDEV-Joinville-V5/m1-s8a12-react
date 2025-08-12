import Typografy from "../atoms/Typografy";
import ProductCard from "../organisms/ProductCard";

export default function ProductPageTemplate({
  products = [],
  onAddToCart = () => {},
  footerText,
}) {
  return (
    <div className="ProductPageTemplate">
      <Typografy variant="h2" text="Nossos Produtos" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} onAddToCart={onAddToCart} />
        ))}
      </div>
      <Typografy text={footerText} />
    </div>
  );
}
