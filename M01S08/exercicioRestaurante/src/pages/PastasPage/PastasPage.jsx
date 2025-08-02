import PageSection from "../../components/PageSection/PageSection";
import CardGrid from "../../components/CardGrid/CardGrid";
import DishCard from "../../components/DishCard/DishCard";

import espagueteImg from "../../assets/massa_espaguete_exemplo.jpeg";
import fettuccineImg from "../../assets/massa_fettuccine_exemplo.jpeg";
import pappardelleImg from "../../assets/massa_pappardelle_exemplo.jpeg";
import penneImg from "../../assets/massa_penne_exemplo.jpeg";
import rigatoniImg from "../../assets/massa_rigatoni_exemplo.jpeg";
import tagliatelleImg from "../../assets/massa_tagliatelle_exemplo.jpeg";

/*
Objetivo: Criar a seção de pastas utilizando cards e integrar com o componente de molhos.
Requisitos:
- Exibir as massas em cards, 3 por linha
- Cada card deve mostrar: nome da massa, imagem ilustrativa, valor e os molhos permitidos
- Use o componente de molhos para exibir as opções disponíveis para cada massa
Massas e molhos permitidos:
- Espaguete: Alla Puttanesca, Al Pesto di Basilico, Cacio e Pepe, Alla Matriciana
- Tagliatelle: Alla Puttanesca, Alla Matriciana
- Fettuccine: Alla Puttanesca, Al Pesto di Basilico, Cacio e Pepe
- Penne: Alla Puttanesca, Cacio e Pepe
- Rigatoni: Alla Matriciana
- Pappardelle: Alla Puttanesca, Alla Matriciana
*/

function PastasPage() {
  return (
    <PageSection id="pastas" title="Pastas" className="PastasPage">
      <CardGrid columns={3}>
        <DishCard
          name="Espaguete"
          price={23}
          imgSrc={espagueteImg}
          sauces={[
            "Alla Puttanesca",
            "Al Pesto di Basilico",
            "Cacio e Pepe",
            "Alla Matriciana",
          ]}
        />
        <DishCard
          name="Tagliatelle"
          price={27}
          imgSrc={tagliatelleImg}
          sauces={["Alla Puttanesca", "Alla Matriciana"]}
        />
        <DishCard
          name="Fettuccine"
          price={25}
          imgSrc={fettuccineImg}
          sauces={["Alla Puttanesca", "Al Pesto di Basilico", "Cacio e Pepe"]}
        />
        <DishCard
          name="Penne"
          price={29}
          imgSrc={penneImg}
          sauces={["Alla Puttanesca", "Cacio e Pepe"]}
        />
        <DishCard
          name="Rigatoni"
          price={25}
          imgSrc={rigatoniImg}
          sauces={["Alla Matriciana"]}
        />
        <DishCard
          name="Pappardelle"
          price={29}
          imgSrc={pappardelleImg}
          sauces={["Alla Puttanesca", "Alla Matriciana"]}
        />
      </CardGrid>
    </PageSection>
  );
}

export default PastasPage;
