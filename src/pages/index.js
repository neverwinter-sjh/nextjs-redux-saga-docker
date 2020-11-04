import React from 'react';
import withReduxSaga from 'src/utils/withReduxSaga';
import CounterContainer from 'src/components/counter/CounterContainer';
import { INCREASE_ASYNC } from 'src/redux/counter';

const Index = (props) => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <p>from server: {props.isServer ? 'true' : 'false'}</p>
      <p>{props.value}</p>
      <p>process.env.CUSTOM_KEY: {process.env.CUSTOM_KEY}</p>
    </div>
  );
};

Index.getInitialProps = async (props) => {
  const { store, isServer } = props.ctx;
  store.dispatch({
    type: INCREASE_ASYNC
  });

  return {
    isServer,
    value: 'Props로 전달되어온 3'
  };
};

export default withReduxSaga(Index);
