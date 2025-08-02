import PageSection from "../../components/PageSection/PageSection";
import CardGrid from "../../components/CardGrid/CardGrid";
import DishCard from "../../components/DishCard/DishCard";
import SauceList from "../../components/SauceList/SauceList";

import potatoGnocchiImg from "../../assets/gnocchi_batata_exemplo.jpeg";
import beetrootGnocchiImg from "../../assets/gnocchi_beterraba_exemplo.jpeg";
import carrotGnocchiImg from "../../assets/gnocchi_cenoura_exemplo.jpeg";
import spinachGnocchiImg from "../../assets/gnocchi_espinafre_exemplo.jpeg";

import "./GnocchiPage.css";

/*
Objetivo: Criar a seção de Gnocchis utilizando dois componentes:
Lista de Gnocchis e Lista de Molhos.
Componente 1: Gnocchis
  - Exibir 4 tipos:
    - Gnocchi de Batata
    - Gnocchi de Espinafre
    - Gnocchi de Cenoura
    - Gnocchi de Beterraba
  - Cada item deve ter: nome, valor e imagem ilustrativa.
  - Os cards devem ser exibidos em colunas de 2 em 2.
Componente 2: Molhos
  - Lista não ordenada com os seguintes molhos:
    - Alla Puttanesca
    - Al Pesto di Basilico
    - Cacio e Pepe
    - Alla Matriciana
*/

function GnocchiPage() {
  return (
    <PageSection id="gnocchi" title="Gnocchi" className="GnocchiPage">
      <CardGrid columns={2}>
        <DishCard
          name="Gnocchi de Batata"
          price={23}
          imgSrc={potatoGnocchiImg}
        />
        <DishCard
          name="Gnocchi de Espinafre"
          price={27}
          imgSrc={beetrootGnocchiImg}
        />
        <DishCard
          name="Gnocchi de Cenoura"
          price={25}
          imgSrc={carrotGnocchiImg}
        />
        <DishCard
          name="Gnocchi de Beterraba"
          price={29}
          imgSrc={spinachGnocchiImg}
        />
      </CardGrid>
      <SauceList
        sauces={[
          "Alla Puttanesca",
          "Al Pesto di Basilico",
          "Cacio e Pepe",
          "Alla Matriciana",
        ]}
      />
    </PageSection>
  );
}

export default GnocchiPage;
