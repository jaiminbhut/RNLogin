import { combineReducers } from 'redux';
import AuthReducer from '../reducers/AuthReducer';

export const rootReducer = combineReducers({
  auth: AuthReducer,
});
