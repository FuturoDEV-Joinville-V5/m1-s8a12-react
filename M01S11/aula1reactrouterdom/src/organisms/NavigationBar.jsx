import { Link, NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.title}>
        <img className={styles.logo} src="/favicon.ico" alt="Logo" />
        <h1>Cinema</h1>
      </div>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/">Início</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Filmes</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
