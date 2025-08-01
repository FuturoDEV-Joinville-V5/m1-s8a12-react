import MenuContainer from "./MenuContainer";
import MenuButton from "./MenuButton";
import spaghettiLogo from "../assets/spaghetti-logo-32x32.png";

import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div>
        <img src={spaghettiLogo} alt="Spaghetti Logo" />
        <h1>Mamamia Massas</h1>
        <nav>
          <MenuContainer>
            <MenuButton label="Início" page="home" />
            <MenuButton label="Gnocchi" page="gnocchi" />
            <MenuButton label="Pastas" page="pastas" />
            <MenuButton label="Bebidas" page="drinks" />
          </MenuContainer>
        </nav>
      </div>
    </header>
  );
}

export default Header;
