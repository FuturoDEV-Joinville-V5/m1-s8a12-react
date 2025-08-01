import { createRoot } from "react-dom/client";
import App from "./App";

// importa estilos globais
import "./index.css";

// pega elemento que será a raiz do React
const divRoot = document.getElementById("root");

// renderiza o componente global
createRoot(divRoot).render(<App />);
