import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import WorkshopListPage from "./pages/WorkshopListPage";
import WorkshopDetailPage from "./pages/WorkshopDetailPage";

import "./App.css";

function App() {
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
