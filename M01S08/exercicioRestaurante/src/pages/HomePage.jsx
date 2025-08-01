import PageSection from "../components/PageSection";

function HomePage() {
  return (
    <PageSection id="home" title="Início" className="HomePage" hideTitle>
      <div className="RichText">
        <p>
          <strong>Objetivo:</strong> Criar um componente de apresentação com
          layout dividido em duas seções.
        </p>
        <p>Requisitos:</p>
        <ul>
          <li>
            <strong>Lado esquerdo:</strong> Frase principal:{" "}
            <em>"Servindo massas há mais de 70 anos"</em>
          </li>
          <li>
            <strong>Subfrase: </strong>
            <em>"Qualidade passada por gerações"</em>
          </li>
          <li>
            <strong>Lado direito:</strong> Imagem fictícia representando a
            fachada do restaurante.
          </li>
        </ul>
        <p>
          Dica: Use CSS Flexbox ou Grid para dividir a tela horizontalmente.
        </p>
      </div>
    </PageSection>
  );
}

export default HomePage;
