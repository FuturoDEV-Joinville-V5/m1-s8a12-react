import { useNavigate, useParams } from "react-router-dom";

function MovieDetailPage() {
  const navigate = useNavigate();
  // lendo o valor do parametro ":id" da URL
  const { id } = useParams();

  console.log({ id });

  return (
    <div className="MovieDetailPage">
      <p>Detalhes do filme com id {id}.</p>
      {/* navegação pelo javascript com hook use navigate */}
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}

export default MovieDetailPage;
