import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

export function About() {
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
        <h2>About</h2>
        <hr />
        <p>
          FishPics is a web application made to improve the way that fishers can communicate about fishing.
          People are able to upload pictures of the fish they caught and share it with other fishers. Geolocating
          services will improve people's knowledge about fishing in varying bodies of water by saving info of rods
          and baits used to the location the fish was caught.
        </p>
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

export default About;
