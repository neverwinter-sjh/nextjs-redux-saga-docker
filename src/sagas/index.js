import { all, fork } from 'redux-saga/effects';

/*
 * rootSaga
 */
export default function* saga() {
  //yield all([fork()]);
  yield console.log('Saga loaded');
}
