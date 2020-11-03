import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'src/reducers/index';
import rootSaga from 'src/sagas/index';
import initialState from 'src/store/initialState';

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV !== 'production'
      ? composeWithDevTools(applyMiddleware(...middlewares))
      : compose;

  const store = createStore(rootReducer, initialState, enhancer);

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export default createWrapper(makeStore, { debug: true });
