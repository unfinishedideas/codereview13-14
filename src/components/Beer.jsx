import React from 'react';
import PropTypes from "prop-types";

function Beer(props) {
  return(
    <div>
      <h3>{props.name}</h3>
      <h4>{props.brand}</h4>
      <p>Price: <em>{props.price}</em></p>
      <p>Alcohol Content: <em>{props.alcoholContent}</em></p>
      <p>Type: <em>{props.type}</em></p>
    </div>
  )
};

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Beer;
