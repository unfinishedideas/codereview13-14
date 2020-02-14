import React from 'react';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import BeersContainer from './components/BeersContainer';
import NewBeerControl from './components/NewBeerControl';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/beers' component={BeersContainer}/>
        <Route path='/newbeer' component={NewBeerControl}/>
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
