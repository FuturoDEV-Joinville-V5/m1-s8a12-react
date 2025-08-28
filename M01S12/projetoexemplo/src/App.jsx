import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import WorkshopListPage from "./pages/WorkshopListPage";
import WorkshopDetailPage from "./pages/WorkshopDetailPage";

import "./App.css";

const PUBLIC_PAGES = ["/", "/signup"];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [appData] = useContext(AppContext);
  console.log({ location });

  useEffect(() => {
    // verifica se não é uma página protegida e se usuário não logado
    if (!PUBLIC_PAGES.includes(location.pathname) && !appData.logedUser) {
      // redireciona para login
      navigate("/");
    }
  }, [appData, location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/workshops" element={<WorkshopListPage />} />
        <Route path="/workshops/new" element={<WorkshopDetailPage />} />
        <Route path="/workshops/:id" element={<WorkshopDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
