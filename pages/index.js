import React from 'react';
import { STOREKEY } from '../node_modules/next-redux-wrapper/es6/index';
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
