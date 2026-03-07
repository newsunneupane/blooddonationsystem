import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🩸 Blood Donation System
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/donors" 
              className={location.pathname === "/donors" ? "nav-link active" : "nav-link"}
            >
              Donors
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
