import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
    isLoggedIn: AuthReducer
});

export default rootReducer;
