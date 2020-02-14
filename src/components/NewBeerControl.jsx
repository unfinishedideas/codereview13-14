import React from 'react';
import NewBeerForm from './NewBeerForm';
import Header from './Header';

function NewBeerControl() {
  const newBeerFormStyle = {
    margin: '0 20%'
  }
  return(
    <div>
      <Header title='New Beer'/>
      <div style={newBeerFormStyle}>
        <NewBeerForm/>
      </div>
    </div>
  )

}

export default NewBeerControl
