import React from 'react';
import Homepage from './components/Homepage';
import BeerContainer from './components/BeerContainer'
import NewBeerControl from './components/NewBeerControl'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/beers' component={BeerContainer}/>
        <Route exact path='/newbeer' component={NewBeerControl}/>
      </Switch>
    </div>
  );
}

export default App;
