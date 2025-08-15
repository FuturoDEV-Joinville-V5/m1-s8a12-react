import Price from "./components/atoms/Price";
import Rating from "./components/atoms/Rating";
import Tags from "./components/atoms/Tags";
import "./App.css";

function App() {
  return (
    <div>
      <p>Vazio</p>
      <Price value={5} />
      <Rating value={8} />
      <Tags categories={["Suspense", "Novela", "Ficção"]} />
    </div>
  );
}

export default App;
