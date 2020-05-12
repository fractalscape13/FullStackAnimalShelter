import * as c from './ActionTypes';

export function getAnimals(response) {
  return {
    type: c.GET_ANIMALS,
    list: response,
    isLoaded: true
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