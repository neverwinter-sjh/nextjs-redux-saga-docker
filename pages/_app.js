import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import wrapper from '../src/reducers';
import withReduxSaga from '../src/utils/WithReduxSaga';

class _App extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        pathname: ctx.pathname
      }
    };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,viewport-fit=cover"
          />
          <title>Nextjs Redux Saga</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(withReduxSaga(_App));
