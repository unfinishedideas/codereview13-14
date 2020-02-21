import React from 'react';
import NewBeerForm from './NewBeerForm';
import Header from './Header';
import PropTypes from 'prop-types';

function NewBeerControl(props) {
  const newBeerFormStyle = {
    margin: '0 20%'
  }
  return(
    <div>
      <Header title='New Beer'/>
      <div style={newBeerFormStyle}>
        <NewBeerForm onNewBeerCreation={props.onNewBeerCreation}/>
      </div>
    </div>
  )

}

NewBeerControl.propTypes = {
  onNewBeerCreation: PropTypes.func.isRequired
}

export default NewBeerControl

// Add a login form here for employees
