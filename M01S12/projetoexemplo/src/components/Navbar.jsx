import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo32.png";

import styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // código para fazer logout
    navigate("/");
  };

  return (
    <nav className={styles.Navbar}>
      <Link to="/dashboard" className={styles.LogoBox}>
        <img src={logoImg} alt="Imagem Logo" />
        <h1>Busca Oficinas</h1>
      </Link>
      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/workshops">Oficinas</NavLink>
        </li>
        <li>
          <button onClick={handleLogout}>Sair</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
