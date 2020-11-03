import { HYDRATE } from 'next-redux-wrapper';
import { counter } from 'src/store/initialState';

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
 * reducer
 */
const reducer = (state = counter, action) => {
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload
      };
      if (action.payload.counter) {
        nextState.value = action.payload.counter.value;
        delete nextState.counter;
      }
      return nextState;

    case INCREASE:
      return {
        ...state,
        value: state.value + 1
      };

    case DECREASE:
      return {
        ...state,
        value: state.value - 1
      };

    default:
      return { ...state };
  }
};

export default reducer;
