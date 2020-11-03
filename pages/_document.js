import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { Html } from 'next/document';

class _Document extends Document {
  render() {
    return (
      <Html lang="ko" dir="ltr">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

_Document.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (WrappedComponent) => (props) => (
        <WrappedComponent {...props} />
      )
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles)]
  };
};

export default _Document;
