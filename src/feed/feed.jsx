import React from 'react';
import Post from './post';
import './feed.css';


export function Feed({ userName }) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((initialPosts) => {
        setPosts(initialPosts);
      });

    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const port = window.location.port;
    const socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    socket.onmessage = (event) => {
      try {
        const newPost = JSON.parse(event.data);
        if (newPost.type === 'NEW_POST') {
          setPosts((prevPosts) => [...prevPosts, newPost.value]);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    return () => {
      socket.close();
    };
}, []);

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
