import { all } from 'redux-saga/effects';
import { counterSaga } from 'src/redux/counter';

export default function* rootSaga() {
  yield all([counterSaga()]);
}
