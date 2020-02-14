import React from 'react';
import Beer from './Beer';
import PropTypes from "prop-types";
import Header from './Header';
import { Link } from 'react-router-dom';

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
    name: 'Hipster Stuff',
    brand: 'Before It was Cool',
    price: '$14.00',
    alcoholContent: '6.5%',
    type: 'Pilsner',
    promoText: 'Meditation scenester kickstarter, offal letterpress fanny pack asymmetrical banjo. Migas leggings chillwave tofu, tousled forage jianbing enamel pin keffiyeh kitsch twee crucifix yr etsy.'
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
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '5%'
  }
  const linkStyle = {
    paddingRight: '12px',
    color: '#DDDBA9'
  }
  return(
    <div>
      <Header title="The Beers"/>
      <div style={gridBox}>
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
// <Link style={linkStyle} to="/">Edit</Link>

Beer.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BeersContainer;
