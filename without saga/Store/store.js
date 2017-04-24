
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
