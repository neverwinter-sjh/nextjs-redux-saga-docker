import React from 'react';
import Link from 'next/link';
import CounterContainer from 'src/containers/counter/CounterContainer';
import { INCREASE_ASYNC } from 'src/redux/stores/counter';
import TestHooks from 'src/components/test/TestHooks';

const Index = ({ isServer, value }) => {
  return (
    <div>
      <p>
        <img src="/static/images/nextjs-logo.png" width="300" />
      </p>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/">
            <button style={{ color: 'blue' }}>Home</button>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a style={{ color: 'red' }}>About Us</a>
          </Link>
        </li>
      </ul>
      <hr />
      <CounterContainer />
      <hr />
      <TestHooks />
      <hr />
      <p>from server: {isServer ? 'true' : 'false'}</p>
      <p>{value}</p>
      <p>process.env.CUSTOM_KEY: {process.env.CUSTOM_KEY}</p>
    </div>
  );
};

Index.getInitialProps = async ({ ctx }) => {
  const { store, isServer } = ctx;
  if (isServer) {
    store.dispatch({
      type: INCREASE_ASYNC
    });
  }

  return {
    isServer,
    value: 'Props로 전달되어온 3'
  };
};

export default Index;
