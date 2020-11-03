import React from 'react';
import CounterContainer from 'src/containers/CounterContainer';
import wrapper from 'src/store/index';
import { INCREASE } from 'src/reducers/counter';

const Index = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <p>{process.env.CUSTOM_KEY}</p>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch({
    type: INCREASE
  });

  return {
    props: {}
  };
});

export default Index;
