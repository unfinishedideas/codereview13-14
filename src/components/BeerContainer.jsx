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
    type: 'Red Ale'
  },
  {
    name: 'Natty',
    brand: 'Pond Water Brewing',
    price: '$1.50',
    alcoholContent: '2%',
    type: 'Basically Water'
  }
];

function BeerContainer(props) {
  return(
    <div>
      <Header title="The Beers"/>
      <h2>{props.type}</h2>
      {beers.map((beer, index) =>
        <Beer
          name={beer.name}
          brand={beer.brand}
          price={beer.price}
          alcoholContent={beer.alcoholContent}
          type={beer.type}
        />
      )}
    </div>
  )
}

Beer.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BeerContainer;
