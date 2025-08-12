import AlertMessage from "./components/molecules/AlertMessage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Atomic Design</p>
      <AlertMessage
        title="Exemplo"
        message="Nossa Molecula"
        type="danger"
        onClose={() => alert("oi")}
      />
    </div>
  );
}

export default App;
