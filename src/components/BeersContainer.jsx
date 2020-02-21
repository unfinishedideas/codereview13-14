import React from 'react';
import Beer from './Beer';
import PropTypes from "prop-types";
import Header from './Header';
import { Link } from 'react-router-dom';


function BeersContainer(props) {
  const gridBox = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '0 5%'
  }
  const linkStyle = {
    paddingRight: '12px',
    color: '#DDDBA9'
  }
  return(
    <div>
      <Header title="The Beers"/>
      <div style={gridBox}>
        {console.log(props)}
      {props.masterBeerList.map((beer, index) =>
        <Beer
          name={beer.name}
          brand={beer.brand}
          price={beer.price}
          alcoholContent={beer.alcoholContent}
          type={beer.type}
          promoText={beer.promoText}
          pintsLeft={beer.pintsLeft}
          key={index}
        />
      )}
      </div>
    </div>
  )
}
// <Link style={linkStyle} to="/">Edit</Link>

BeersContainer.propTypes = {
  masterBeerList: PropTypes.array.isRequired
}

// Beer.propTypes = {
//   type: PropTypes.string.isRequired,
//   masterBeerList: PropTypes.array.isRequired
// };

export default BeersContainer;
