import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "modern-css-reset";

const divRoot = document.getElementById("root");

createRoot(divRoot).render(<App />);
