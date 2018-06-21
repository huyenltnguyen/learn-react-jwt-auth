import types from '../actions/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case types.VALIDATE_ACCESS_TOKEN:
      return action.payload;
  default:
    return state;
  }
}
