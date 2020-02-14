import React from 'react';
import EditBeerForm from './EditBeerForm';
import Header from './Header';

function NewBeerControl() {
  return(
    <div>
      <Header title='Edit Beer'/>
      <EditBeerForm/>
    </div>
  )

}

export default NewBeerControl
