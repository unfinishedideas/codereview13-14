import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewBeerForm(props) {
  const submitBtnStyle = {
    marginTop: '20px',
    height: '50px',
    backgroundColor: '#ac3232',
    color: 'white',
    border: 'none'
  }
  const newBeerFormStyles = {
    border:' rgb(10,10,10) solid 2px',
    backgroundColor: 'rgb(50,50,50)',
    padding: '40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    width: '75%',
    margin: '0 auto'
  }

  let _name = null;
  let _brand = null;
  let _price = null;
  let _alcoholContent = null;
  let _type = null;
  let _promoText = null;

  function newBeerCallback(event) {
    event.preventDefault();
    props.onNewBeerCreation({name: _name.value, brand: _brand.value, price: _price.value, alcoholContent: _alcoholContent.value, type: _type.value, promoText: _promoText.value, key: v4(), pintsLeft: 124, soldOut: false})
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _type.value = '';
    _promoText.value = '';
  }

  return(
    <div>
      <form style={newBeerFormStyles} action="./#/beers" method="none">

        <div>
          <label>Name</label>
        </div>
        <div>
          <input name="name" placeholder="ex. Natty Lite" ref={(input) => {_name = input;}}/>
        </div>
        <div/>

        <div>
          <label>Brand</label>
        </div>
        <div>
          <input name="brand" placeholder="ex. Pond Scum Brewery" ref={(input) => {_brand = input;}}/>
        </div>
        <div/>

        <div>
          <label>Price ($)</label>
        </div>
        <div>
          <input name="price" placeholder="ex. 4.00" ref={(input) => {_price = input;}}/>
        </div>
        <div/>

        <div>
          <label>Alcohol Content</label>
        </div>
        <div>
          <input name="alcoholContent" placeholder="ex. 7" ref={(input) => {_alcoholContent = input;}}/>
        </div>
        <div/>

        <div>
          <label>Type</label>
        </div>
        <div>
          <input name="type" placeholder="ex. IPA" ref={(input) => {_type = input;}}/>
        </div>
        <div/>

        <div>
          <label>Promotional Text</label>
        </div>
        <div>
          <textarea name="promoText" placeholder="Promotional text here" ref={(input) => {_promoText = input;}}/>
        </div>
        <div/>

        <button style={submitBtnStyle} type="submit" onClick={newBeerCallback}>Submit</button>

      </form>
    </div>

  )
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func.isRequired
}

export default NewBeerForm;
