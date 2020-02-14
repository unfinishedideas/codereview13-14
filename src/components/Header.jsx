import React from 'react';
import PropTypes from "prop-types";
import Nav from './Nav';

function Header(props) {
  const headerStyle = {
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ac3232',
    color: 'white'
  }
  const heroTextStyle = {
    margin: '0px 40px',
    padding: '20px 0px',
    textShadow: '2px 2px black'
  }
  const pageTitleStyle = {
    textAlign: 'center',
  }

  return (
    <div>
      <div style={headerStyle}>
        <h1 style={heroTextStyle}>Beers-n-Stuff</h1>
        <Nav/>
      </div>
      <h2 style={pageTitleStyle}>{props.title}</h2>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
