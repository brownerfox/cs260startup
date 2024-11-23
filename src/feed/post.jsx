import React from 'react';
import '../profile/profile.css';

export function Post({ location, rodType, baitType, imageUrl, caption, time, userName }) {
  return (
    <div className="post">
      <div className="post-info">
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Rod type:</strong> {rodType}</p>
        <p><strong>Bait type:</strong> {baitType}</p>
      </div>
      <div className="post-image">
        <img src={imageUrl} alt="Post Image" style={{ width: '400px' }} className="post-image" />
      </div>
      <div className="post-actions">
        <button>❤️</button>
        <button>💬</button>
        <button>✈️</button>
      </div>
      <div className="post-caption">
        <p><strong>User:</strong> {userName.split('@')[0]}</p>
        <p><strong>Caption:</strong> {caption}</p>
      </div>
      <div className="post-time">
        <p>{time}</p>
      </div>
      <hr/>
    </div>
  );
}

export default Post;
