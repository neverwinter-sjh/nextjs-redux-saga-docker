import React from 'react';
import CounterContainer from '../src/containers/CounterContainer';
import { INCREASE } from '../src/reducers/store';

const Index = () => {
  return <CounterContainer />;
};

Index.getInitialProps = ({ store }) => {
  store.dispatch({
    type: INCREASE,
  });
  return {};
};

export default Index;
