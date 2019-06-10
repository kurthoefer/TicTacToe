import React, { Component } from "react";

class Game extends Component {
  constructor() {
    this.state = {
      // rounds: 9,
      // currentPlayer: 'X',
      // locations: [ 
      //   0, 0, 0,
      //   0, 0, 0,
      //   0, 0, 0
      // ],
      
    }
    this.board = new Board();
    this.player = "x";
    this.rounds = 9;
  }

  render() {
    return (
      <Board />
    );
  }
}

export default Game;