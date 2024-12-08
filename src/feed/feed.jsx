import React from 'react';
import Post from './post';
import './feed.css';


export function Feed({ userName }) {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  // WebSocket connection for real-time updates
  React.useEffect(() => {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const ws = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'newPost') {
        setPosts((prevPosts) => [message.payload, ...prevPosts]); // Add new post to the top
      }
    };

    return () => ws.close(); // Clean up WebSocket connection
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
