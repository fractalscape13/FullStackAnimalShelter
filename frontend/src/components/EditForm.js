import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideEditForm } from '../Actions/index';

function EditForm() {
  const currentAnimal = useSelector(state => state.currentAnimal);
  const dispatch = useDispatch();
  console.log("CURRENT ANIMAL", currentAnimal)

  function handleEdit(event) {
    const requestOptions = { 
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: event.target.name.value, type: event.target.type.value, breed: event.target.breed.value})
  };
  fetch('http://localhost:5004/api/animals' + currentAnimal.id, requestOptions)
  .then(async response => {
    const data = await response.json();
    if (!response.ok) {
      console.log("update error")
    }
    dispatch(hideEditForm());
  })
  .catch(error => {
    console.log("there was an update error", error)
  });
}

  return (
    <React.Fragment>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          name="name"
          defaultValue="" /><br />
        <input
          type="text"
          name="type"
          defaultValue="Type of animal" /><br />
        <input
          type="text"
          name="breed"
          defaultValue="Breed" /><br />
        <button type="submit">Update animal!</button>
      </form>
    </React.Fragment>
  )
}

export default EditForm;