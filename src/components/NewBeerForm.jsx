import React from 'react';

function NewBeerForm() {
  return(
    <div>
      <form action="index.html" method="post">
        <label for="name">Name</label>
        <input name="name" placeholder="ex. Natty Lite"/>
        <label for="brand">Brand</label>
        <input name="brand" placeholder="ex. Pond Scum Brewery"/>
        <label for="price">Price</label>
        <input name="price" placeholder="ex. $4.00"/>
        <label for="alcoholContent">Alcohol Content</label>
        <input name="alcoholContent" placeholder="ex. 7%"/>
        <label for="type">Type</label>
        <input name="type" placeholder="ex. IPA"/>
        <button type="submit">Submit</button>
      </form>
    </div>

  )
}

export default NewBeerForm;
