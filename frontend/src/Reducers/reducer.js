import * as c from '../Actions/ActionTypes';

let initialState = {
  list: [],
  isLoaded: false,
  error: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case c.GET_ANIMALS:
      return Object.assign({}, state, {
        list: action.list,
        isLoaded: false,
        error: false
      });
      default:
        return state;
  }
};