import { combineReducers } from 'redux';
import counter from 'src/reducers/counter';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
