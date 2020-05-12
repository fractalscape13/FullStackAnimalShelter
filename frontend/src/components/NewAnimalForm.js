import React from 'react';
import { useDispatch } from 'react-redux';
import { hideForm } from '../Actions/index';

function NewAnimalForm() {

  const dispatch = useDispatch();

  function handleAdd( ) {
    dispatch(hideForm());
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