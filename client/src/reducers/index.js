import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
    accessTokenIsValid: AuthReducer
});

export default rootReducer;
