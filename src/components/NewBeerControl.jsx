import React from 'react';
import NewBeerForm from './NewBeerForm';
import Header from './Header';

function NewBeerControl() {
  return(
    <div>
      <Header title='New Beer'/>
      <NewBeerForm/>
    </div>
  )

}

export default NewBeerControl
