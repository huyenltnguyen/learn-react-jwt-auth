import { combineReducers } from 'redux';
import AccessTokenReducer from './reducer_accessToken';
import userLogInReducer from './reducer_userLogIn';

const rootReducer = combineReducers({
    accessTokenIsValid: AccessTokenReducer,
    userIsLoggedIn: userLogInReducer
});

export default rootReducer;
