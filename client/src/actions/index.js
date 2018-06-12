import types from '../actions/actionTypes';

export function changeLogInState(isLoggedIn) {
  return {
    type: tyoes.LOGGED_IN,
    payload: isLoggedIn
  };
}
