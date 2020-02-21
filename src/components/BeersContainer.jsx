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
      {props.masterBeerList.map((beer) =>
        <Beer
          name={beer.name}
          brand={beer.brand}
          price={beer.price}
          alcoholContent={beer.alcoholContent}
          type={beer.type}
          promoText={beer.promoText}
          pintsLeft={beer.pintsLeft}
          soldOut={beer.soldOut}
          key={beer.key}
          id={beer.key}
          onSellPint={props.onSellPint}
          onRestock={props.onRestock}
        />
      )}
      </div>
    </div>
  )
}

BeersContainer.propTypes = {
  masterBeerList: PropTypes.array.isRequired,
  onSellPint: PropTypes.func.isRequired
}

export default BeersContainer;
