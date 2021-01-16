import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/summerwood">
          <h1>Summerwood</h1>
        </Link>
      </div>
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/summerwood/about">About</Link>
          </li>

          <li>
            <Link to="/summerwood/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/summerwood/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
