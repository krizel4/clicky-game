import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './style.css'

const white = {
    color: '#ffffff'
}
class Nav extends Component {
  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  renderMessage(correct, gameWon, clear = false) {
    let message, blank;
    if (clear) {
      blank = '';
    } else if (correct === undefined) {
      message = 'Start the party. Click a person.';
      blank = '';
    } else {
      message = gameWon
        ? 'How the turntables...'
        : correct
        ? `No one parties like a Scranton party, coz a Scranton party don't stop.`
        : 'Dwight, you ignorant slut!';
      blank = correct ? 'correct' : 'incorrect';
    }

    window.clearTimeout(this.timeout);
    if (!clear & (correct !== undefined)) {
      this.timeout = window.setTimeout(
        this.renderMessage,
        gameWon ? 3000 : 1000,
        gameWon ? undefined : correct,
        false,
        true
      );
    }
    return (
      <h2 key={Math.random()} blank={blank}>
        {message}
      </h2>
    );
  }

  render() {
    return (
      <>
    <Navbar bg='dark' variant='dark' sticky='top' className='main-navigation'>
      
       <h4 style={white}>Score: {this.props.score} | High Score: {this.props.highScore}</h4>
       </Navbar>

        <Jumbotron> 
            <h3> 
            {this.renderMessage(this.props.correct, this.props.gameWon)}
            </h3>
        </Jumbotron>

      </>
    );
  }
}

export default Nav;
