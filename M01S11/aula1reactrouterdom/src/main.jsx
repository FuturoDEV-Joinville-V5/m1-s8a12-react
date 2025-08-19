import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const divRoot = document.getElementById("root");

createRoot(divRoot).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
