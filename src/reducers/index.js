import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import { reducer, initialState, saga } from './store';

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools(applyMiddleware(...middlewares))
      : compose;

  const store = createStore(reducer, initialState, enhancer);

  store.sagaTask = sagaMiddleware.run(saga);

  return store;
};

export default createWrapper(makeStore, { debug: true });
