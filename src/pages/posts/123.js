import React from 'react';
import Layout from '../../components/Layout';

export default function Post({ post }) {
  return (
    <Layout>
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // In a real application, you would fetch your posts here
  // For now, we'll use dummy data
  const posts = [
    { id: 1, title: 'First Research Post' },
    { id: 2, title: 'Second Research Post' },
  ];

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // In a real application, you would fetch your post content here
  // For now, we'll use dummy data
  const post = {
    id: params.id,
    title: `Research Post ${params.id}`,
    content: `<p>This is the content of research post ${params.id}.</p>`,
  };

  return {
    props: {
      post,
    },
  };
}
