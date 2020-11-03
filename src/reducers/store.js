import { HYDRATE } from 'next-redux-wrapper';
import { all, fork } from 'redux-saga/effects';

/*
 * Constant
 */
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

/*
 * Actions
 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/*
 * Saga Actions
 */

/*
 * rootSaga
 */
export function* saga() {
  yield all([fork()]);
}

/*
 * initialState
 */
export const initialState = {
  value: 0,
};

/*
 * reducer
 */
export const reducer = (state = initialState, action) => {
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
