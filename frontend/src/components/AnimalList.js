import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewAnimalForm from './NewAnimalForm';
import EditForm from './EditForm';
import {showForm, showEditForm} from '../Actions/index';

function AnimalList(props) {
  const dispatch = useDispatch();
  const error = useSelector(state => state.error);
  const isLoaded = useSelector(state => state.isLoaded);
  const formVisible = useSelector(state => state.formVisible);
  const editing = useSelector(state => state.editing);

  function handleDelete(id) {
    const requestOptions = { 
      method: 'DELETE',
    };
    fetch(('http://localhost:5004/api/animals/' + id), requestOptions)
    .then(response => response.json())
    //   console.log("DATA", data)
    //   dispatch(hideForm());
    //   if (!response.ok) {
    //     console.log("delete error")
    //   }
    // }
    .catch(error => {
      console.log("there was a delete error", error)
    });
  }

  function handleEditClick(animal) {
    dispatch(showEditForm(animal));
  }

  function handleAddClick(){
    dispatch(showForm());
  }

  const imgSource = "http://source.unsplash.com/250x150/?";

  if (editing) {
    return (
      <React.Fragment>
        <EditForm />
      </React.Fragment>
    )
  } else if (formVisible) {
    return (
      <React.Fragment>
        <NewAnimalForm />
      </React.Fragment>
    )
  } else if (error) {
    return <React.Fragment>Error: {error.message}</React.Fragment>;
  } else if (isLoaded) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else {
    return (
      <React.Fragment>
        <h1>Current Inventory</h1>
        <button onClick={handleAddClick}>Add an animal</button>
        <ul>
          {props.list.map((animal, index) =>
            <div className="card" key={index}>
              <li>
                <h3>{animal.name}</h3>
                <img src={imgSource + animal.breed}  />
                <p>{animal.type}</p>
                <p>{animal.breed}</p>
                <button onClick={() => handleDelete(animal.animalId)}>Delete</button>
                <button onClick={() => handleEditClick(animal)}>Edit</button>
              </li>
            </div>
            )}
        </ul>
      </React.Fragment>
    );
  }
}

export default AnimalList;