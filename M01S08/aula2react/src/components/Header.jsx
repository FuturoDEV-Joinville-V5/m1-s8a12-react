import "./Header.css";

function mostraAlert() {
  alert("Funciona o meu evento de click!");
}

function Header() {
  return (
    <header className="header">
      <h1>Restaurante Massa</h1>
      <nav>
        <ul>
          <li onClick={mostraAlert}>Início</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
