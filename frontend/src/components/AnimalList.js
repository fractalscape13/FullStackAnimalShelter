import React from 'react';
import { useSelector } from 'react-redux';

function AnimalList(props) {
  const error = useSelector(state => state.error);
  const isLoaded = useSelector(state => state.isLoaded);

  function handleDelete(id) {
    console.log(id)
  }

  function handleEdit(id) {
    console.log(id)
  }

  if (error) {
    return <React.Fragment>Error: {error.message}</React.Fragment>;
  } else if (isLoaded) {
    return <React.Fragment>Loading...</React.Fragment>;
  } else {
    return (
      <React.Fragment>
        <h1>Animals in the shelter</h1>
        <ul>
          {props.list.map((animal, index) =>
            <div className="card" key={index}>
              <li>
                <h3>{animal.name}</h3>
                <p>{animal.type}</p>
                <p>{animal.breed}</p>
                <button onClick={() => handleDelete(animal.animalId)}>Delete</button>
                <button onClick={() => handleEdit(animal.animalId)}>Edit</button>
              </li>
            </div>
            )}
        </ul>
      </React.Fragment>
    );
  }
}

export default AnimalList;