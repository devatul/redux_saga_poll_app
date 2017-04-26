
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);

sagaMiddleware.run(rootSaga);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
