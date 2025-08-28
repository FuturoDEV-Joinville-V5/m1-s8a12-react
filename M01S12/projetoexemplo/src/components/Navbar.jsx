import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div>
        <h1>Busca Oficinas</h1>
      </div>
      <ul>
        <li>Dashboard</li>
        <li>Oficinas</li>
        <li>Sair</li>
      </ul>
    </nav>
  );
}

export default Navbar;
