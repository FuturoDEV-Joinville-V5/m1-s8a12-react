import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const divRoot = document.getElementById("root");

createRoot(divRoot).render(<App />);
