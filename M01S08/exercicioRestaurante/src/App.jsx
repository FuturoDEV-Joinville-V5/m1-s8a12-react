import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
        <Footer />
      </main>
    </div>
  );
}

export default App;
