import PageSection from "../../components/PageSection/PageSection";

function DrinksPage() {
  return (
    <PageSection id="drinks" title="Bebidas" className="DrinksPage">
      <div className="RichText">
        <p>
          <strong>Objetivo:</strong> Criar a seção de bebidas com categorias e
          preços.
        </p>
        <p>Requisitos:</p>
        <ul>
          <li>Categorias:</li>
          <li>
            <strong>Água</strong>
          </li>
          <li>
            <strong>Refrigerantes</strong>: Coca-Cola, Guaraná, Sprite
          </li>
          <li>
            <strong>Sucos</strong>: Morango, Laranja, Uva
          </li>
          <li>Cada item deve exibir: nome e valor</li>
        </ul>
        <p>
          Dica: Use cards ou listas agrupadas por categoria para melhor
          organização visual.
        </p>
      </div>
    </PageSection>
  );
}

export default DrinksPage;
