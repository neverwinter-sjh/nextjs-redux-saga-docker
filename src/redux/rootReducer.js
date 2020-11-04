import { combineReducers } from 'redux';
import counter from 'src/redux/stores/counter';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
