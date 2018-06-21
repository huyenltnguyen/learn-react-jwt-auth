import types from '../actions/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case types.SET_USER_LOG_IN_STATUS:
      return action.payload;
    default:
      return state;
  }
};
