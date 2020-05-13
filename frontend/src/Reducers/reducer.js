import * as c from '../Actions/ActionTypes';

let initialState = {
  list: [],
  isLoaded: false,
  error: false,
  formVisible: false,
  editing: false,
  currentAnimal: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case c.GET_ANIMALS:
      return Object.assign({}, state, {
      });
      case c.GET_ANIMALS_SUCCESS:
      return Object.assign({}, state, {
        list: action.list,
        isLoaded: true,
        animals: action.animals
      });
    case c.GET_ANIMALS_FAILURE:
      return Object.assign({}, state, {
        isLoaded: false,
        error: action.error
      });
    case c.NEW_ANIMAL:
      return Object.assign({}, state, {
        formVisible: false
      })
    case c.SHOW_FORM:
      return Object.assign({}, state, {
        formVisible: true
      })
    case c.HIDE_FORM:
      return Object.assign({}, state, {
        formVisible: false
      })
    case c.TOGGLE_EDITING_TRUE:
      console.log("ACTION", action)
      return Object.assign({}, state, {
        editing: true, 
        currentAnimal: action.currentAnimal
      })
    case c.TOGGLE_EDITING_FALSE:
      return Object.assign({}, state, {
        editing: false,
        currentAnimal: null
      })
      default:
        return state;
  }
};