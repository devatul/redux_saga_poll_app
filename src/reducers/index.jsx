import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { sessionReducer } from 'redux-react-session';
import login from './login';
import polling from './polling';

const rootReducer = combineReducers({
  login,
  polling,
  session: sessionReducer,
  routing: routerReducer,
});

export default rootReducer;
