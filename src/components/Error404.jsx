import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  const linkStyle = {
    color: 'white'
  }
  const errStyle = {
    textAlign: 'center'
  }
  return (
    <div style={errStyle}>
      <h2>BeersNStuff{props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link style={linkStyle} to="/">home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
