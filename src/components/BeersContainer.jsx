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
  const noBeersTextStyle = {
    textAlign: 'center'
  }

  let display = null;

  if (props.masterBeerList.length < 1) {
    display = <h2 style={noBeersTextStyle}>No beers currently available in taproom</h2>
  } else  {
    display = <div style={gridBox}>{props.masterBeerList.map((beer) =>
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
          onRemoveBeer={props.onRemoveBeer}
          onBeerSelection={props.onBeerSelection}
          />
      )}
    </div>
  }

  return(
    <div>
      <Header title="The Beers"/>
      {display}
    </div>
  );
}


BeersContainer.propTypes = {
  masterBeerList: PropTypes.array.isRequired,
  currentRouterPath: PropTypes.string.isRequired,
  onBeerSelection: PropTypes.func.isRequired,
  onSellPint: PropTypes.func,
  onRemoveBeer: PropTypes.func
}

export default BeersContainer;
