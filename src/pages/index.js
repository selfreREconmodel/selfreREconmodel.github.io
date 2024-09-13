import React from 'react';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

export default function Home({ posts }) {
  return (
    <Layout>
      <h1>Welcome to My Research Blog</h1>
      <PostList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  // In a real application, you would fetch your posts here
  // For now, we'll use dummy data
  const posts = [
    { id: 1, title: 'First Research Post', excerpt: 'This is a summary of the first research post.' },
    { id: 2, title: 'Second Research Post', excerpt: 'This is a summary of the second research post.' },
  ];

  return {
    props: {
      posts,
    },
  };
}
