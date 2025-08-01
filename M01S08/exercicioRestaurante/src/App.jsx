import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import HomePage from "./pages/HomePage";
import GnocchiPage from "./pages/GnocchiPage";
import PastasPage from "./pages/PastasPage";
import DrinksPage from "./pages/DrinksPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
        <GnocchiPage />
        <PastasPage />
        <DrinksPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
