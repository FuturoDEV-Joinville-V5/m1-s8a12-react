import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div>
        <div className="RichText">
          <p>
            <strong>Objetivo:</strong> Finalizar o projeto do cardápio digital
            integrando todos os componentes.
          </p>
          <p>Requisitos:</p>
          <ul>
            <li>
              Criar um <strong>rodapé</strong> com:
            </li>
            <li>Ícones de redes sociais (ex: Instagram, Facebook, etc.)</li>
            <li>Endereço fictício do restaurante</li>
            <li>
              Criar um componente <code>Cardapio</code> que agrupe todos os
              outros
            </li>
            <li>
              Renderizar o componente <code>Cardapio</code> dentro do arquivo{" "}
              <code>App.jsx</code>
            </li>
            <li>
              <strong>Validar a tipagem de todos os componentes</strong> (use{" "}
              <code>props</code> definidas)
            </li>
          </ul>
          <p>
            Dica: Use uma biblioteca de ícones se precisar (
            <a
              href="https://github.com/react-icons/react-icons"
              target="_blank"
            >
              GitHub - react-icons/react-icons: svg react icons of popular icon
              packs
            </a>
            ).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
