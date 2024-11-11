import React from 'react';
import { Link } from 'react-router-dom';
import Feed from '../feed/feed.jsx';
import './profile.css';

export function Profile() {
  const posts = [
    {
      location: "Creek Reservoir",
      rodType: "Pflueger Spinning Rod",
      baitType: "Purple Spinner",
      imageUrl: "IMG_1463.JPEG",
      caption: "Decent fish I caught in Deer Creek!",
      time: "2 hours ago",
    },
  ];

  return (
    <div>
      <main>
        <div className="profile">
          <h2>BrownFox</h2>
          <img src="user1.jpg" alt="Your Profile Picture" style={{ width: '100px' }} className="profile-image" />
          <p>Fisher of fish and fisher of men. Matthew 4:18-20</p>
          <hr />
        </div>
        
        <nav>
          <ul>
            <li><Link to="/createapost">Make a new post!</Link></li>
          </ul>
        </nav>

        {/* Display user posts in the Feed component */}
        <Feed posts={posts} />
      </main>
    </div>
  );
}

export default Profile;
