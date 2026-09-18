import { useEffect } from "react";

function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) {
      return;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [movie, onClose]);

  if (!movie) {
    return null;
  }

  const cleanSummary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No summary available.";

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {movie.image?.original && (
          <img
            src={movie.image.original}
            alt={movie.name}
            className="modal-image"
          />
        )}

        <div className="modal-content">
          <h2 id="modal-title">
            {movie.name}
          </h2>

          <div className="modal-meta">
            <span>
              ⭐ {movie.rating?.average ?? "N/A"}
            </span>

            <span>
              📅 {movie.premiered ?? "N/A"}
            </span>
          </div>

          <p>{cleanSummary}</p>

          {movie.genres?.length > 0 && (
            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres.join(", ")}
            </p>
          )}

          {movie.runtime && (
            <p>
              <strong>Runtime:</strong>{" "}
              {movie.runtime} minutes
            </p>
          )}

          <button onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;