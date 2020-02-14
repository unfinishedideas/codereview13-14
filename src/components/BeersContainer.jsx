import React from 'react';
import Beer from './Beer';
import PropTypes from "prop-types";
import Header from './Header';

const beers = [
  {
    name: 'Boozy',
    brand: 'Ninkasi',
    price: '$4.00',
    alcoholContent: '7%',
    type: 'Red Ale',
    promoText: 'Brewed in beautiful Eugene, OR. This fine beer will be sure to get you nice and boozy.'
  },
  {
    name: 'Natty',
    brand: 'Pond Water Brewing',
    price: '$1.50',
    alcoholContent: '2%',
    type: 'Basically Water',
    promoText: 'Favorite of frat houses everywhere for it\'s non-existent flavor and low alcohol content. Perfect for a game of beer pong.'
  }
];

function BeersContainer(props) {
  const gridBox = {
    display: 'grid'
  }
  return(
    <div>
      <Header title="The Beers"/>
      <div style={gridBox}>
      <h2>{props.type}</h2>
      {beers.map((beer, index) =>
        <Beer
          name={beer.name}
          brand={beer.brand}
          price={beer.price}
          alcoholContent={beer.alcoholContent}
          type={beer.type}
          promoText={beer.promoText}
        />
      )}
      </div>
    </div>
  )
}

Beer.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BeersContainer;
