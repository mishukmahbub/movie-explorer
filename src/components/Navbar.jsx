import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MovieExplorer
      </Link>

      <Link to="/movies" className="nav-link">
        Movies
      </Link>
    </nav>
  );
}

export default Navbar;