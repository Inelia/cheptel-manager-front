import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import { Link } from 'react-router-dom';

function Header(props) {
  let css;
  if (props.home) {
    css = {
      header: {
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '99999',
        padding: '1.2rem 2rem',
        maxWidth: '100vw',
        width: '100%',
        width: '-moz-available',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        color: 'white',
      },
    };
  } else {
    css = '';
  }
  return (
    <header className="header" style={css.header}>
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
