import MenuButton from "./MenuButton";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Mamamia Massas</h1>
      <nav>
        <ul>
          <li>
            <MenuButton label="Início" />
          </li>
          <li>
            <MenuButton label="Gnocchi" />
          </li>
          <li>
            <MenuButton label="Pastas" />
          </li>
          <li>
            <MenuButton label="Bebidas" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
