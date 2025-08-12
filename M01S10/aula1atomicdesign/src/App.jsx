import ProductCard from "./components/organisms/ProductCard";

import "./App.css";

function App() {
  const produtoExemplo = {
    name: "Alecrim",
    rating: 4,
  };

  return (
    <div className="App">
      <p>Atomic Design</p>
      <ProductCard
        product={produtoExemplo}
        addToCart={() => alert("Adicionou ao carrinho!")}
      />
    </div>
  );
}

export default App;
