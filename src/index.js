import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; // Assuming you have an App component in src/App.js

// Rendering the App component into the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is where React will inject the app in public/index.html
);
