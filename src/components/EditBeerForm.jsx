import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function EditBeerForm(props) {
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
  let _pintsLeft = null;

  const beerNameStyle = {
    textAlign: 'center'
  }

  function editBeerCallback(event) {
    event.preventDefault();
    props.onUpdateBeer({name: _name.value, brand: _brand.value, price: '$'+_price.value, alcoholContent: _alcoholContent.value+'%', type: _type.value, promoText: _promoText.value, key: props.selectedBeer.id, pintsLeft: _pintsLeft.value, soldOut: props.selectedBeer.soldOut})
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    _type.value = '';
    _pintsLeft.value = '';
    _promoText.value = '';
  }

  return(
    <div>
      <h2 style={beerNameStyle}>Editing {props.selectedBeer.name}</h2>
      <form style={newBeerFormStyles} action="./#/beers" method="none">

        <div>
          <label>Name</label>
        </div>
        <div>
          <input name="name"  defaultValue={props.selectedBeer.name} ref={(input) => {_name = input;}}/>
        </div>
        <div/>

        <div>
          <label>Brand</label>
        </div>
        <div>
          <input name="brand"  defaultValue={props.selectedBeer.brand} ref={(input) => {_brand = input;}}/>
        </div>
        <div/>

        <div>
          <label>Price ($)</label>
        </div>
        <div>
          <input name="price"  defaultValue={props.selectedBeer.price} ref={(input) => {_price = input;}}/>
        </div>
        <div/>

        <div>
          <label>Alcohol Content</label>
        </div>
        <div>
          <input name="alcoholContent"  defaultValue={props.selectedBeer.alcoholContent} ref={(input) => {_alcoholContent = input;}}/>
        </div>
        <div/>

        <div>
          <label>Type</label>
        </div>
        <div>
          <input name="type"  defaultValue={props.selectedBeer.type} ref={(input) => {_type = input;}}/>
        </div>
        <div/>
        <div>
          <label>Pints Left</label>
        </div>
        <div>
          <input name="type" defaultValue={props.selectedBeer.pintsLeft} ref={(input) => {_pintsLeft = input;}}/>
        </div>
        <div/>

        <div>
          <label>Promotional Text</label>
        </div>
        <div>
          <textarea name="promoText" defaultValue={props.selectedBeer.promoText} ref={(input) => {_promoText = input;}}/>
        </div>
        <div/>

        <button style={submitBtnStyle} type="submit" onClick={editBeerCallback}>Submit</button>

      </form>
    </div>

  )
}

EditBeerForm.propTypes = {
  onUpdateBeer: PropTypes.func.isRequired,
  selectedBeer: PropTypes.object.isRequired
}

export default EditBeerForm;
