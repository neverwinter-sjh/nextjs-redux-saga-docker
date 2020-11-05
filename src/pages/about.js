import React from 'react';

const About = (props) => {
  return (
    <div>
      <h1>About Page</h1>
      <hr />
      <p>from server: {props.isServer ? 'true' : 'false'}</p>
      <p>{props.value}</p>
      <p>process.env.CUSTOM_KEY: {process.env.CUSTOM_KEY}</p>
    </div>
  );
};

About.getInitialProps = async (props) => {
  const { isServer } = props.ctx;

  return {
    isServer,
    value: 'Props로 전달되어온 3'
  };
};

export default About;
