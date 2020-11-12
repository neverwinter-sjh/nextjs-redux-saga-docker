import Head from 'next/head';

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="msapplication-TileColor" content="#00df94" />
        <meta name="theme-color" content="#00df94" />
        <title>Next/Redux/Saga Boilerplate</title>
      </Head>
      {children}
    </>
  );
}

export default Layout;
