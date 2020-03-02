import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards';
import theoffice from './theoffice.json';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';

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

class App extends Component {
  // Setting this.state.theoffice to theoffice json array
  state = {
    theoffice
  };

  clickHandler = theofficepeeps => {
    if (this.state.clicked.indexOf(theofficepeeps) === -1) {
      let score = this.state.clicked.length + 1,
        clicked =
          score === this.state.theoffice.length
            ? []
            : [...this.state.clicked, theofficepeeps];
      this.setState({
        theoffice: this.state.theoffice.sort(this.randomize),
        clicked: clicked,
        score: score,
        highScore: Math.max(this.state.highScore, score),
        correct: true,
        gameWon: score === this.state.theoffice.length
      });
    } else {
      this.setState({
        theoffice: this.state.theoffice.sort(this.randomize),
        clicked: [],
        score: 0,
        correct: false,
        gameWon: false
      });
    }
  };

  // map over this.state.theoffice and render a dunder mifflin card component for each object
  render() {
    return (
      <>
      <Navbar />
      <Wrapper>
        <title>The Office: Memory Game</title>
        {this.state.theoffice.map(employee => (
          <Cards
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
          />
        ))}
        </Wrapper>
        </>
    );
  }
}

export default App;
