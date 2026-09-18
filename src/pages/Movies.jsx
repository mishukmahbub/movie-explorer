import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://api.tvmaze.com/shows"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      setMovies(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(value) {
    setSearch(value);

    if (!value.trim()) {
      fetchMovies();
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
          value
        )}`
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();

      const searchResults = data.map(
        (item) => item.show
      );

      setMovies(searchResults);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="movies-page">
        <div className="container">
          <h1>Explore Movies & Shows</h1>

          <SearchBar
            value={search}
            onChange={handleSearch}
          />

          {loading && (
            <p className="status">
              Loading...
            </p>
          )}

          {error && (
            <p className="status error">
              {error}
            </p>
          )}

          {!loading &&
            !error &&
            movies.length === 0 && (
              <p className="status">
                No movies found.
              </p>
            )}

          {!loading &&
            !error &&
            movies.length > 0 && (
              <div className="movie-grid">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onDetails={setSelectedMovie}
                  />
                ))}
              </div>
            )}
        </div>
      </main>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <Footer />
    </>
  );
}

export default Movies;