import { useParams } from "react-router-dom";

function MovieDetailPage() {
  const { id } = useParams();

  console.log({ id });

  return (
    <div className="MovieDetailPage">
      <p>Detalhes do filme com id {id}.</p>
    </div>
  );
}

export default MovieDetailPage;
