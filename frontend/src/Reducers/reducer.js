import * as c from '../Actions/ActionTypes';

let initialState = {
  list: [],
  isLoaded: false,
  error: false,
  formVisible: false
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
      default:
        return state;
  }
};