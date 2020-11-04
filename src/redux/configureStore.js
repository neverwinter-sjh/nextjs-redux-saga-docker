import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = process.env.NODE_ENV !== 'production' ? composeWithDevTools : compose;

  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
