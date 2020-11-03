import { HYDRATE } from 'next-redux-wrapper';
import { all, fork } from 'redux-saga/effects';
import watchExampleSagas from './exampleSagas';

export function* rootSaga() {
  yield all([fork(watchExampleSagas)]);
}

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const initialState = {
  value: 0,
};

export const stateStore = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    case INCREASE:
      return {
        ...state,
        value: state.value + 1,
      };

    case DECREASE:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return { ...state };
  }
};
