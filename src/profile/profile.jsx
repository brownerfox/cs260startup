// Profile.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Feed from './Feed';
import './profile.css';

export function Profile() {
  // Sample data; this could come from props or API calls in a real app
  const posts = [
    {
      location: "Creek Reservoir",
      rodType: "Pflueger Spinning Rod",
      baitType: "Purple Spinner",
      imageUrl: "IMG_1463.JPEG",
      caption: "Decent fish I caught in Deer Creek!",
      time: "2 hours ago",
    },
    // Additional posts can be added here
  ];

  return (
    <div>
      <header>
        <h1>FishPics</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/feed">Feed</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <hr />
      </header>

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

        <Feed posts={posts} />
      </main>

      <footer>
        <hr />
        <span className="text-reset">Taft Lakey</span>
        <br />
        <a href="https://github.com/brownerfox/cs260startup">GitHub</a>
      </footer>
    </div>
  );
}

export default Profile;
