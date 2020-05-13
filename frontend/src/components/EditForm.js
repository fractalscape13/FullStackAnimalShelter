import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editAnimal } from '../Actions/index';

function EditForm() {
  const currentAnimal = useSelector(state => state.currentAnimal);
  const dispatch = useDispatch();
  
  function handleEdit(event) {
    dispatch(editAnimal(event, currentAnimal.animalId));
    // const requestOptions = { 
    // method: 'PUT',
    // headers: {'Content-Type': 'application/json'},
    // body: JSON.stringify({animalId: currentAnimal.animalId, name: event.target.name.value, type: event.target.type.value, breed: event.target.breed.value
    // })
    // };
    // fetch('http://localhost:5004/api/animals/' + currentAnimal.animalId, requestOptions)
    // .then(async response => {
    //   const data = await response.json();
    //   if (!response.ok) {
    //     console.log("update error")
    //   }
    //   dispatch(hideEditForm());
    // })
    // .catch(error => {
    //   console.log("there was an update error", error)
    // });
  }

let currentName = currentAnimal.name;
let currentType = currentAnimal.type;
let currentBreed = currentAnimal.breed;

  return (
    <React.Fragment>
      <form onSubmit={handleEdit}>
        <input
          type="text"
          name="name"
          defaultValue={currentName} /><br />
        <input
          type="text"
          name="type"
          defaultValue={currentType} /><br />
        <input
          type="text"
          name="breed"
          defaultValue={currentBreed} /><br />
        <button type="submit">Update animal!</button>
      </form>
    </React.Fragment>
  )
}

export default EditForm;