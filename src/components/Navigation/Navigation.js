import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      {/* <Link to="/home">Accueil</Link> */}
      <Link to="/login">Produits</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Connexion</Link>
      <Link to="/signup" className="btn btn-blue">
        Inscription
      </Link>
      <Outlet />
    </nav>
  );
}

export default Navigation;
