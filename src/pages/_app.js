import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'src/utils/withReduxSaga';
import createStore from 'src/redux/configureStore';
import Layout from 'src/components/layout/index';
import withAppInsights from 'src/utils/AppInsights';

const App = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

/*
 * WebVital 리포트
 * @params {}
 */
export function reportWebVitals(metric) {
  console.log(metric);
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) pageProps = await Component.getInitialProps({ ctx });

  return {
    pageProps: pageProps
  };
};

export default withRedux(createStore)(withReduxSaga(withAppInsights(App)));
