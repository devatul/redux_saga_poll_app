import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import rootReducer from '../reducers/index';
// import user from './data/user';

// export function createStoreWithMiddleware(history, data) {
//   const reduxRouterMiddleware = routerMiddleware(history);
//   const sagaMiddleware = createSagaMiddleware();
//   const middleware = [reduxRouterMiddleware, sagaMiddleware];
//
//
//   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   const store = createStore(rootReducer, data, composeEnhancers(
//     applyMiddleware(...middleware),
//   ));
//
//   sagaMiddleware.run(rootSaga);
//   return store;
// }

export const sagaMiddleware = createSagaMiddleware();
const middleware = [routerMiddleware, sagaMiddleware];
const store = createStore(rootReducer, compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));
sagaMiddleware.run(rootSaga);

export default store;
