import React from 'react';
import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h2>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
