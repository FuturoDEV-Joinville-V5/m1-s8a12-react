import PageSection from "../../components/PageSection/PageSection";

function GnocchiPage() {
  return (
    <PageSection id="gnocchi" title="Gnocchi" className="GnocchiPage">
      <div className="RichText">
        <p>
          <strong>Objetivo:</strong> Criar a seção de Gnocchis utilizando dois
          componentes: <strong>Lista de Gnocchis</strong> e{" "}
          <strong>Lista de Molhos</strong>.
        </p>
        <p>
          <strong>Componente 1: Gnocchis</strong>
        </p>
        <ul>
          <li>Exibir 4 tipos:</li>
        </ul>
        <ol>
          <li>Gnocchi de Batata</li>
          <li>Gnocchi de Espinafre</li>
          <li>Gnocchi de Cenoura</li>
          <li>Gnocchi de Beterraba</li>
        </ol>
        <ul>
          <li>Cada item deve ter: nome, valor e imagem ilustrativa.</li>
          <li>
            Os cards devem ser exibidos <strong>em colunas de 2 em 2</strong>.
          </li>
        </ul>
        <p>
          <strong>Componente 2: Molhos</strong>
        </p>
        <ul>
          <li>Lista não ordenada com os seguintes molhos:</li>
          <li>Alla Puttanesca</li>
          <li>Al Pesto di Basilico</li>
          <li>Cacio e Pepe</li>
          <li>Alla Matriciana</li>
        </ul>
      </div>
    </PageSection>
  );
}

export default GnocchiPage;
