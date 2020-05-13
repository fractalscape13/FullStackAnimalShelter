import * as c from './ActionTypes';

export function requestAnimals() {
  return {
    type: c.GET_ANIMALS,
  }
}
export function requestAnimalsSuccess(response) {
  console.log("SUCCESS", response)
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
    dispatch(requestAnimals);
    return fetch('http://localhost:5004/api/animals')
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          console.log("JSON RESULTS", jsonifiedResponse)
          dispatch(requestAnimalsSuccess(jsonifiedResponse))
        })
      .catch((error) => {
        dispatch(requestAnimalsFailure(error));
      });
  }
}

export function newAnimal(animal) {
  return {
    type: c.NEW_ANIMAL,
    name: animal.name,
    type: animal.type,
    breed: animal.breed
  }
}

export function deleteAnimal(id) {
  return {
    type: c.DELETE_ANIMAL
  }
}

export function editAnimal(id) {
  return {
    type: c.EDIT_ANIMAL
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