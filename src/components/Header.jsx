import React from 'react';
import PropTypes from "prop-types";

function Header(props) {
  const headerStyle = {
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    margin: '0 72px'
  }
  return (
    <div>
      <div style={headerStyle}>
        <h1>{props.title}</h1>
      </div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
