import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import WorkshopListPage from "./pages/WorkshopListPage";
import WorkshopDetailPage from "./pages/WorkshopDetailPage";

import styles from "./App.module.css";

const PUBLIC_PAGES = ["/", "/signup"];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [appData] = useContext(AppContext);

  useEffect(() => {
    // verifica se não é uma página protegida e se usuário não logado
    if (appData.logedUser && PUBLIC_PAGES.includes(location.pathname)) {
      // se usuário logado entra nas telas de login ou cadastro
      // redireciona para dashboard
      navigate("/dashboard");
    }
    if (!appData.logedUser && !PUBLIC_PAGES.includes(location.pathname)) {
      // se usuário não logado entra nas telas protegidas
      // redireciona para login
      navigate("/");
    }
  }, [appData, location]);

  return (
    <>
      <Navbar />
      <main className={styles.PageContainer}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/workshops" element={<WorkshopListPage />} />
          <Route path="/workshops/new" element={<WorkshopDetailPage />} />
          <Route path="/workshops/:id" element={<WorkshopDetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
