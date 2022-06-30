import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1>
          Cheptel Manager<span className="brand-point">.</span>
        </h1>
      </Link>
      {/* <h1>
        Cheptel Manager<span className="brand-point">.</span>
      </h1> */}
      <Navigation />
    </header>
  );
}

export default Header;
