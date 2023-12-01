
import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";

const styles = {
  navbar: {
    background: "#343a40",
    padding: "1rem",
    marginBottom: "1rem",
  },
  navLink: {
    color: "white",
    marginRight: "1rem",
  },
  logoutLink: {
    color: "red",
    fontWeight: "bold",
  },
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar}>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/productos" className="nav-link" style={styles.navLink}>
            Productos
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/soporte" className="nav-link" style={styles.navLink}>
            Support
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/nosotros" className="nav-link" style={styles.navLink}>
            Nosotros
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <LogOut className="logout-link" style={styles.logoutLink} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
