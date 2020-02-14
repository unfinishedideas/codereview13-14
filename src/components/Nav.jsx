import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
  }
  const linkStyle = {
    paddingRight: '12px'
  }
  return(
    <div style={navStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/beers">Beers on tap</Link>
      <Link style={linkStyle} to="/newbeer">Add a Beer</Link>
    </div>
  )
}

export default Nav;
