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

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const posts = await res.json();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id }
//   }));

//   console.log(paths);

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch({
    type: INCREASE
  });

  return {
    props: {}
  };
});

export default Index;
