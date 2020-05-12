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
        list: action.list,
        isLoaded: false,
        error: false
      });
      case c.GET_ANIMALS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        animals: action.animals
      });
    case c.GET_ANIMALS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
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
      console.log("ACTION ID", action.id)
      return Object.assign({}, state, {
        editing: true, 
        currentAnimal: action.id
      })
    case c.TOGGLE_EDITING_FALSE:
      return Object.assign({}, state, {
        editing: false
      })
      default:
        return state;
  }
};