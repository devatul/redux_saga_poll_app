import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import poll from './poll';

const rootReducer = combineReducers({
  login,
  poll,
  routing: routerReducer,
});

export default rootReducer;
