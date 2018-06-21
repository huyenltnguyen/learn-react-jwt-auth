import types from '../actions/actionTypes';

export const validateAccessToken = (accessToken) => {
  const tokenUrl = 'http://localhost:3001/api/auth/token';

  // if accessToken doesn't exist in sessionStorage
  // return false
  if (!accessToken) {
    return {
      type: types.VALIDATE_ACCESS_TOKEN,
      payload: false
    };
  }

  return (dispatch) => {
    fetch(tokenUrl, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then((res) => res.json())
    // data is available if accessToken is valid
    .then((data) => {
      dispatch({
        type: types.VALIDATE_ACCESS_TOKEN,
        payload: true
      });
    })
    // data is NOT available if accessToken is invalid
    // since Passport responds with a 401 status code
    // and the route handlers are not invoked
    // (http://www.passportjs.org/docs/authenticate/)
    .catch(() => {
      dispatch({
        type: types.VALIDATE_ACCESS_TOKEN,
        payload: false
      });

      // if the accessToken is invalid, log user out
      // and delete sessionStorage
      dispatch(setUserLogInStatus(false));
    })
  };
}

export const setUserLogInStatus = (isLoggedIn) => {
  sessionStorage.removeItem('accessToken');

  return {
    type: types.SET_USER_LOG_IN_STATUS,
    payload: isLoggedIn
  };
}
