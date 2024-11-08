// Feed.jsx
import React from 'react';
import Post from './Post';

export function Feed({ posts }) {
  return (
    <div className="feed">
      {posts.map((post, index) => (
        <Post
          key={index}
          location={post.location}
          rodType={post.rodType}
          baitType={post.baitType}
          imageUrl={post.imageUrl}
          caption={post.caption}
          time={post.time}
        />
      ))}
    </div>
  );
}

export default Feed;
