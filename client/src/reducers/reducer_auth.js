import types from '../actions/actionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case types.LOGGED_IN:
      return action.payload;
  default:
    return state;
  }
}
