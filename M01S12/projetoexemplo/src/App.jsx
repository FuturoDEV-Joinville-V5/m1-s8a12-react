import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import WorkshopListPage from "./pages/WorkshopListPage";
import WorkshopDetailPage from "./pages/WorkshopDetailPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Busca Oficinas</h1>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/workshops" element={<WorkshopListPage />} />
        <Route path="/workshops/new" element={<WorkshopDetailPage />} />
        <Route path="/workshops/:id" element={<WorkshopDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
