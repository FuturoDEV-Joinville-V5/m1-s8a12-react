import Price from "./components/atoms/Price";
import Rating from "./components/atoms/Rating";
import "./App.css";

function App() {
  return (
    <div>
      <p>Vazio</p>
      <Price value={5} />
      <Rating value={8} />
    </div>
  );
}

export default App;
