import { Link, NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
  const navActiveClass = ({ isActive }) => {
    return isActive ? styles.active : "";
  };

  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        <img className={styles.logo} src="/favicon.ico" alt="Logo" />
        <Link to="/">
          <h1>Cinema</h1>
        </Link>
      </div>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" className={navActiveClass}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={navActiveClass}>
            Filmes
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navActiveClass}>
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
