import PageSection from "../../components/PageSection/PageSection";
import reataurantPhoto from "../../assets/fachada_restaurante_exemplo.jpeg";

import "./HomePage.css";

/*
Objetivo: Criar um componente de apresentação com layout dividido em duas seções.
Requisitos:
- Lado esquerdo: Frase principal: "Servindo massas há mais de 70 anos"
                 Subfrase: "Qualidade passada por gerações"
- Lado direito: Imagem fictícia representando a fachada do restaurante.
Dica: Use CSS Flexbox ou Grid para dividir a tela horizontalmente.
*/

function HomePage() {
  return (
    <PageSection id="home" title="Início" className="HomePage" hideTitle>
      <div className="left">
        <p>Servindo massas há mais de 70 anos</p>
        <p>Qualidade passada por gerações</p>
      </div>
      <div className="right">
        <img src={reataurantPhoto} alt="Foto do Restaurante" />
      </div>
    </PageSection>
  );
}

export default HomePage;
