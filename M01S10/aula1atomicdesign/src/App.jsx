import ProductPageTemplate from "./components/templates/ProductPageTemplate";

import "./App.css";

const produtosExemplo = [
  {
    id: 1,
    name: "Alecrim",
    rating: 4,
  },
  {
    id: 2,
    name: "Oregano",
    rating: 5,
  },
  {
    id: 3,
    name: "Salsinha",
    rating: 2,
  },
  {
    id: 4,
    name: "Cebolinha",
    rating: 2,
  },
];

function App() {
  return (
    <div className="App">
      <p>Atomic Design</p>
      <ProductPageTemplate products={produtosExemplo} footerText="Promoção" />
    </div>
  );
}

export default App;
