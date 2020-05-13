import * as c from './ActionTypes';

export function requestAnimals() {
  return {
    type: c.GET_ANIMALS,
  }
}
export function requestAnimalsSuccess(response) {
  return {
    type: c.GET_ANIMALS_SUCCESS,
    list: response,
    isLoaded: true
  }
}
export function requestAnimalsFailure() {
  return {
    type: c.GET_ANIMALS_FAILURE,
    error: true
  }
}

export const getAnimals = () => {
  return dispatch => {
    return fetch('http://localhost:5004/api/animals')
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(requestAnimalsSuccess(jsonifiedResponse))
        })
      .catch((error) => {
        dispatch(requestAnimalsFailure(error));
      });
  }
}

export const newAnimal = (event) => {
  return dispatch => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: event.target.name.value, type: event.target.type.value, breed: event.target.breed.value})
    };
    return fetch('http://localhost:5004/api/animals', requestOptions)
    .then(() => {
      dispatch(getAnimals())
    })
    .catch(error => {
      console.log('there was a post error', error)
    });
  }
}

export const editAnimal = (event, id) => {
  return dispatch => {
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({animalId: id, name: event.target.name.value, type: event.target.type.value, breed: event.target.breed.value})
    };
    return fetch(('http://localhost:5004/api/animals/' + id), requestOptions)
    .then(() => {
        dispatch(getAnimals())
      })
      .catch(error => {
        console.log('there was an update error', error)
    });
  }
}

export const deleteAnimal = (id) => {
  return dispatch => {
    const requestOptions = { 
      method: 'DELETE',
    };
    return fetch(('http://localhost:5004/api/animals/' + id), requestOptions)
      .then( () => {
        dispatch(getAnimals())
      })
      .catch(error => {
      console.log("there was a delete error", error)
    });
  }
}


export function showForm() {
  return {
    type: c.SHOW_FORM
  }
}

export function hideForm() {
  return {
    type: c.HIDE_FORM
  }
}

export function showEditForm(animal) {
  return {
    type: c.TOGGLE_EDITING_TRUE,
    currentAnimal: animal
  }
}

export function hideEditForm() {
  return {
    type: c.TOGGLE_EDITING_FALSE
  }
}