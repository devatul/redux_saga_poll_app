import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import polling from './polling';

const rootReducer = combineReducers({
  login,
  polling,
  routing: routerReducer,
});

export default rootReducer;
