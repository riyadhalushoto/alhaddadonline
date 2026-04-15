import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Al Haddad Online</h1>
        <nav className="nav">
          <Link to="/">Accueil</Link>
          <Link to="/boutique">Boutique</Link>
          <Link to="/service">Services</Link>
          <Link to="/contact">Contact</Link>
          <button
          onClick={() => window.location.reload()}
          className="refresh-btn"
        >
          🔄 Actualiser
        </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;