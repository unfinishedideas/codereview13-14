import React from 'react';
import Header from './Header';

function Homepage() {
  const fluffTextStyle = {
    textAlign: 'center'
  }
  return (
    <div>
      <Header title="Home"/>
      <p style={fluffTextStyle}>Here at Beers-n-Stuff we provide only the finest beers, and stuff!</p>
      <p style={fluffTextStyle}>Use the navigation above to navigate around the site</p>
      <p style={fluffTextStyle}><em>Most importantly we do not condone the misuse of alcohol</em></p>
    </div>
  )
}

export default Homepage;
