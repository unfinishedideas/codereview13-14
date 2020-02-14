import React from 'react';
import Homepage from './components/Homepage';
import BeersContainer from './components/BeersContainer'
import NewBeerControl from './components/NewBeerControl'
import Error404 from './components/Error404'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/beers' component={BeersContainer}/>
        <Route exact path='/newbeer' component={NewBeerControl}/>
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
