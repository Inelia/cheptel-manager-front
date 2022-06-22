import React from 'react';
import Navigation from '../Navigation/Navigation.js';

function Header() {
  return (
    <header className="header">
      <h1>
        Cheptel Manager<span className="brand-point">.</span>
      </h1>
      <Navigation />
    </header>
  );
}

export default Header;
