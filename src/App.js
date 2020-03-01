import React from 'react';
import logo from './logo.svg';
import './App.css';

// =============
// Following list are things to do and not necessarily things that will appear in the app.js
// =============
// Database for images with click boolean - true and false
// function to shuffle cards after a click
// Increment score for every false to true image clicked
// If an image that's set to true is clicked again, trigger game loss.
// Once game is set to lost, announce final score
// Give option to start game over again
// If they restart the game, the score clears out and cards reshuffle.



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
