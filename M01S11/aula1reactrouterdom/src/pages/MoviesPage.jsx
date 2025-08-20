import { Link } from "react-router-dom";
import { useContext } from "react";
import { batata } from "../AppContext";

const MOVIES_LIST = [
  {
    id: "1",
    nome: "O Senhor dos Anéis: A Sociedade do Anel",
    genero: "Aventura/Fantasia",
    idade_indicada: 12,
    sinopse:
      "Um jovem hobbit, Frodo, herda um anel poderoso e embarca em uma jornada épica para destruí-lo antes que caia nas mãos do Senhor do Escuro, Sauron.",
    cartaz: "/cartaz_oSenhorDosAneis_aSociedadeDoAnel.jpg",
  },
  {
    id: "2",
    nome: "Interestelar",
    genero: "Ficção Científica",
    idade_indicada: 10,
    sinopse:
      "Em um futuro onde a Terra se torna inabitável, um grupo de astronautas parte em uma missão interestelar para encontrar um novo lar para a humanidade.",
    cartaz: "/cartaz_interestelar.jpg",
  },
  {
    id: "3",
    nome: "O Rei Leão",
    genero: "Animação/Drama",
    idade_indicada: 0,
    sinopse:
      "Após a morte de seu pai, o jovem leão Simba deve enfrentar seus medos e assumir seu lugar como o verdadeiro rei da savana.",
    cartaz: "/cartaz_oReiLeao.jpg",
  },
  {
    id: "4",
    nome: "A Origem",
    genero: "Ação/Ficção Científica",
    idade_indicada: 14,
    sinopse:
      "Um ladrão especializado em extrair segredos do inconsciente recebe a missão impossível de implantar uma ideia na mente de um herdeiro poderoso.",
    cartaz: "/cartaz_aOrigem.jpg",
  },
  {
    id: "5",
    nome: "Parasita",
    genero: "Drama/Thriller",
    idade_indicada: 16,
    sinopse:
      "Uma família pobre se infiltra na vida de uma família rica, mas um segredo perigoso ameaça destruir o frágil equilíbrio entre elas.",
    cartaz: "/cartaz_parasita.jpg",
  },
  {
    id: "6",
    nome: "Homem-Aranha: Sem Volta Para Casa",
    genero: "Ação/Aventura",
    idade_indicada: 12,
    sinopse:
      "Após sua identidade ser revelada, Peter Parker pede ajuda ao Doutor Estranho, mas um feitiço errado libera vilões de outros universos.",
    cartaz: "/cartaz_homemAranha_semVoltaParaCasa.jpg",
  },
];

function MoviesPage() {
  const { theme, toggleTheme } = useContext(batata);

  console.log("MoviesPage", { theme });

  return (
    <div className="MoviesPage">
      <p>Filmes Disponíveis</p>
      <ul>
        {MOVIES_LIST.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesPage;
