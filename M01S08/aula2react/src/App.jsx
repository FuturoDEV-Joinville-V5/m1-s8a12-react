import { useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [page, setPage] = useState("home");

  if (page === "home") {
    return (
      <div>
        <HomePage />
        <button onClick={() => setPage(null)}>Fecha</button>
      </div>
    );
  }

  return (
    <div>
      <button>Fecha</button>
    </div>
  );
}

export default App;
