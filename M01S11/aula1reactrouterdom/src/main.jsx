import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./AppContext.jsx";
import App from "./App.jsx";

const divRoot = document.getElementById("root");

createRoot(divRoot).render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
);
