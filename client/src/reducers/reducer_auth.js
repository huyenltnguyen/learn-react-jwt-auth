import types from '../actions/actionTypes';

export default function(state = null, action) {
  switch (action.type) {
    case types.VALIDATE_ACCESS_TOKEN:
      console.log(action.payload);
      return action.payload;
  default:
    return state;
  }
}
