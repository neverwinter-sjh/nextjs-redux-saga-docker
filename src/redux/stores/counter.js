import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

/*
 * Constant
 */
export const INCREASE = "counter/INCREASE";
export const DECREASE = "counter/DECREASE";
export const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
export const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

/*
 * Actions
 */
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

/*
 * reducer
 */
const reducer = (state = { value: 0 }, action) => {
  switch (action.type) {
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

export default reducer;
