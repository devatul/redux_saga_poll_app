
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/sagas';
import user from './data/user';
import pollList from './data/polllist';

const sagaMiddleware = createSagaMiddleware();

export const defaultState = {
  user,
  pollList,
};

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
