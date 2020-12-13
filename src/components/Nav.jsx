import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <h1>Summerwood</h1>
        </Link>
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
