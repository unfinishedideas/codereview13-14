import React from 'react';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import BeersContainer from './components/BeersContainer';
import NewBeerControl from './components/NewBeerControl';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';


const initialBeers = [
  {
    name: 'Boozy',
    brand: 'Ninkasi',
    price: '$4.00',
    alcoholContent: '7%',
    type: 'Red Ale',
    promoText: 'Brewed in beautiful Eugene, OR. This fine beer will be sure to get you nice and boozy.',
    pintsLeft: 124
  },
  {
    name: 'Hipster Stuff',
    brand: 'Before It was Cool',
    price: '$14.00',
    alcoholContent: '6.5%',
    type: 'Pilsner',
    promoText: 'Meditation scenester kickstarter, offal letterpress fanny pack asymmetrical banjo. Migas leggings chillwave tofu, tousled forage jianbing enamel pin keffiyeh kitsch twee crucifix yr etsy.',
    pintsLeft: 124
  },
  {
    name: 'Natty',
    brand: 'Pond Water Brewing',
    price: '$1.50',
    alcoholContent: '2%',
    type: 'Basically Water',
    promoText: 'Favorite of frat houses everywhere for it\'s non-existent flavor and low alcohol content. Perfect for a game of beer pong.',
    pintsLeft: 124
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: initialBeers
    };
    this.handleAddBeerToList = this.handleAddBeerToList.bind(this);
    this.handleSellPint = this.handleSellPint.bind(this);
  }

  handleAddBeerToList(beer) {
    let newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(beer);
    this.setState({masterBeerList: newMasterBeerList});
  };

  handleSellPint() {
    console.log('sold pint!');
  }

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/beers' render={()=><BeersContainer masterBeerList={this.state.masterBeerList} onSellPint={this.handleSellPint}/>} />
          <Route path='/newbeer' render={()=><NewBeerControl onNewBeerCreation={this.handleAddBeerToList}/>} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}


export default App;
