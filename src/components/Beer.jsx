import React from 'react';
import PropTypes from "prop-types";
import bottle from '../assets/img/bottle.png'

function Beer(props) {
  const beerBoxStyle = {
    // border: 'white solid 2px',
    padding: '50px',
    display: 'flex',
    margin: '20px 72px',
    width: '550px',
    height: '150px'
  }
  const littleText = {
    margin: '0',
    color: '#68b46f'
  }
  const beerNameStyle = {
    margin: '0',
    fontSize: '30px',
    width: '150px'
  }
  const infoBoxStyle = {
    paddingRight: '25px'
  }
  const infoTextStyle = {
    textAlign: 'right',
    color: 'rgb(150,150,255)',
  }
  const bottleStyle = {
    paddingRight: '25px'
  }
  return(
    <div style={beerBoxStyle}>
      <img style={bottleStyle} src={bottle} alt="bottle graphic"/>
      <div style={infoBoxStyle}>
        <h3 style={beerNameStyle}>{props.name}</h3>
        <h4>{props.brand}</h4>
        <p style={littleText}>Price: <em style={infoTextStyle}>{props.price}</em></p>
        <p style={littleText}>Alcohol Content: <em style={infoTextStyle}>{props.alcoholContent}</em></p>
        <p style={littleText}>Type: <em style={infoTextStyle}>{props.type}</em></p>
      </div>
      <p><em>{props.promoText}</em></p>
    </div>
  )
};

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  promoText: PropTypes.string.isRequired
};

export default Beer;
