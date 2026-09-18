import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Movies & Shows</h1>

        <p>
          Explore movies and TV shows from around the world.
          Find your next favorite story.
        </p>

        <Link to="/movies" className="hero-button">
          Explore Movies
        </Link>
      </div>
    </section>
  );
}

export default Hero;