import MenuContainer from "./MenuContainer";
import MenuButton from "./MenuButton";
import spaghettiLogo from "../assets/spaghetti-logo-32x32.png";

import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <img src={spaghettiLogo} alt="Spaghetti Logo" />
      <h1>Mamamia Massas</h1>
      <nav>
        <MenuContainer>
          <MenuButton label="Início" />
          <MenuButton label="Gnocchi" />
          <MenuButton label="Pastas" />
          <MenuButton label="Bebidas" />
        </MenuContainer>
      </nav>
    </header>
  );
}

export default Header;
