import React from 'react';
import { useDispatch } from 'react-redux';
import { hideForm } from '../Actions/index';

function NewAnimalForm() {

  const dispatch = useDispatch();

  function handleAdd(event) {
    const action = { 
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: event.target.name.value, type: event.target.type.value, breed: event.target.breed.value})
    };
    fetch('http://localhost:5004/api/animals', action)
    .then(async response => {
      const data = await response.json();
      if (!response.ok) {
        console.log("post error")
      }
      dispatch(hideForm());
    })
    .catch(error => {
      console.log("there was an error", error)
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="name"
          placeholder="Name" /><br />
        <input
          type="text"
          name="type"
          placeholder="Type of animal" /><br />
        <input
          type="text"
          name="breed"
          placeholder="Breed" /><br />
        <button type="submit">Add animal!</button>
      </form>
    </React.Fragment>
  )
}

export default NewAnimalForm;