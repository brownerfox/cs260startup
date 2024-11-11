import React from 'react';
import Post from './post';
import './feed.css';


export function Feed({ posts = [], userName }) {
    return (
      <div className="feed">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <Post
              key={index}
              location={post.location}
              rodType={post.rodType}
              baitType={post.baitType}
              imageUrl={post.imageUrl}
              caption={post.caption}
              time={post.time}
              userName={userName}
            />
          ))
        ) : (
          <p>No posts to display</p>
        )}
      </div>
    );
  }

export default Feed;
