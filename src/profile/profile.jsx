import React from 'react';
import { Link } from 'react-router-dom';
import Feed from '../feed/feed.jsx';
import './profile.css';

export function Profile({ userName }) {
  return (
    <div>
      <main>
        <div className="profile">
          <h2>{userName.split('@')[0]}</h2>
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
        <Feed userName={userName}/>
      </main>
    </div>
  );
}

export default Profile;
