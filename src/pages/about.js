import React from 'react';
import Link from 'next/link';

const About = ({ isServer, value }) => {
  const link = () => {
    window.location.href = 'http://www.naver.com';
  };

  return (
    <div>
      <p>
        <img src="/static/images/nextjs-logo.png" width="300" />
      </p>
      <h1>About Page</h1>
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
      <p>from server: {isServer ? 'true' : 'false'}</p>
      <p>{value}</p>
      <p>process.env.CUSTOM_KEY: {process.env.CUSTOM_KEY}</p>
      <hr />
      <p>
        <button type="button" onClick={link}>
          주문 완료
        </button>
      </p>
    </div>
  );
};

About.getInitialProps = async ({ ctx }) => {
  const { store, isServer } = ctx;
  return {
    isServer,
    value: 'Props로 전달되어온 3'
  };
};

export default About;
