import PageSection from "../components/PageSection/PageSection";

function PastasPage() {
  return (
    <PageSection id="pastas" title="Pastas" className="PastasPage">
      <div className="RichText">
        <p>
          <strong>Objetivo:</strong> Criar a seção de pastas utilizando cards e
          integrar com o componente de molhos.
        </p>
        <p>Requisitos:</p>
        <ul>
          <li>
            Exibir as massas em cards, <strong>3 por linha</strong>
          </li>
          <li>
            Cada card deve mostrar: nome da massa, imagem ilustrativa, valor e
            os molhos permitidos
          </li>
          <li>
            Use o componente de molhos para exibir as opções disponíveis para
            cada massa
          </li>
        </ul>
        <p>
          <strong>Massas e molhos permitidos:</strong>
        </p>
        <ul>
          <li>
            <strong>Espaguete</strong>: Alla Puttanesca, Al Pesto di Basilico,
            Cacio e Pepe, Alla Matriciana
          </li>
          <li>
            <strong>Tagliatelle</strong>: Alla Puttanesca, Alla Matriciana
          </li>
          <li>
            <strong>Fettuccine</strong>: Alla Puttanesca, Al Pesto di Basilico,
            Cacio e Pepe
          </li>
          <li>
            <strong>Penne</strong>: Alla Puttanesca, Cacio e Pepe
          </li>
          <li>
            <strong>Rigatoni</strong>: Alla Matriciana
          </li>
          <li>
            <strong>Pappardelle</strong>: Alla Puttanesca, Alla Matriciana
          </li>
        </ul>
      </div>
    </PageSection>
  );
}

export default PastasPage;
