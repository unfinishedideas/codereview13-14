import React from 'react';
import EditBeerForm from './EditBeerForm';
import Header from './Header';
import PropTypes from 'prop-types';



function EditBeerControl(props) {
  let display = null
  if (props.selectedBeer === null) {
    display = <p>something went wrong - beer not selected</p>
  }
  else {
    display = <EditBeerForm onUpdateBeer={props.onUpdateBeer} selectedBeer={props.selectedBeer}/>
  }
  return(
    <div>
      <Header title='Edit Beer'/>
      {display}
    </div>
  )
}

EditBeerControl.propTypes = {
  selectedBeer: PropTypes.func.isRequired,
  onUpdateBeer: PropTypes.func.isRequired
}

export default EditBeerControl
