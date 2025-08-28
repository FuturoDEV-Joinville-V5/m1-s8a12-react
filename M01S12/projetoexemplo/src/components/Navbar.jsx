import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import logoImg from "../assets/logo32.png";

import styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();
  const [appData, setAppData] = useContext(AppContext);
  const hasLogedUser = !!appData.logedUser;

  const handleGotoLogin = () => {
    navigate("/");
  };

  const handleLogout = () => {
    setAppData((currentAppData) => ({ ...currentAppData, logedUser: null }));
    handleGotoLogin();
  };

  return (
    <nav className={styles.Navbar}>
      <Link to={hasLogedUser ? "/dashboard" : "/"} className={styles.LogoBox}>
        <img src={logoImg} alt="Imagem Logo" />
        <h1>Busca Oficinas</h1>
      </Link>
      <ul>
        {hasLogedUser ? (
          <>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/workshops">Oficinas</NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Sair</button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleGotoLogin}>Entrar</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
