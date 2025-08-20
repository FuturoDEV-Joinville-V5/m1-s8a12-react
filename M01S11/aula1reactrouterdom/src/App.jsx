import { Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from "./organisms/NavigationBar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* criando uma rota dinamica */}
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* redirecionamento da rota /batata para a rota /movies */}
        <Route path="/batata" element={<Navigate to="/movies" replace />} />
        {/* todas as outras rotas exibirão 404 not found page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
