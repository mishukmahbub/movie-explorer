function MovieCard({ movie, onDetails }) {
  return (
    <article className="movie-card">
      <img
        src={movie.image?.medium}
        alt={movie.name}
      />

      <div className="movie-card-content">
        <h2>{movie.name}</h2>

        <div className="movie-meta">
          <span>
            ⭐ {movie.rating?.average ?? "N/A"}
          </span>

          <span>
            📅 {movie.premiered?.slice(0, 4) ?? "N/A"}
          </span>
        </div>

        <button onClick={() => onDetails(movie)}>
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;