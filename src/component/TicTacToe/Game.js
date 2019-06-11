import React, { Component } from "react";
import Title from "./Header/Title"
import Feed from "./Header/Feed"
import Board from "./Board/Board"
import { updateWinTrackerHash } from "../util/ticTacToe"

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardSize: 3,
      roundsLeft: 9,
      currentPlayer: 'X',
      winner: false,
      locations: [ 
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
      ],
      winTrackerHash: {
        row0: 0,
        row1: 0,
        row2: 0,
        col0: 0,
        col1: 0,
        col2: 0,
        diag0: 0,
        diag1: 0
      }
    }
    this.takeTurn = this.takeTurn.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
  }

  takeTurn(key) {
    const { locations, winner, winTrackerHash, currentPlayer, boardSize } = this.state
    if (locations[key] === 0 && !winner) {
      const updatedWinTrackerHash = updateWinTrackerHash(key, winTrackerHash, currentPlayer, boardSize);
      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      const nextLocations = [...locations];
      nextLocations[key] = currentPlayer;


      if (updatedWinTrackerHash === 'winner') {
        this.setState((prevState, props) => {
          return {
            locations: nextLocations,
            winner: prevState.currentPlayer,
            roundsLeft: prevState.roundsLeft - 1
          }
        });
      } else {
        this.setState((prevState, props) => {
          return {
            locations: nextLocations,
            winTrackerHash: updatedWinTrackerHash,
            currentPlayer: nextPlayer,
            roundsLeft: prevState.roundsLeft - 1
          }
        });
      }
    }
  }

  clearBoard() {
    const { locations, winTrackerHash } = this.state

    // make arr of len 'rounds' with all values '0'
    const clearedLocations = [...locations].fill(0);

    const clearedWinTrackerHash = Object.assign({}, winTrackerHash)
    for (let key in clearedWinTrackerHash) {
      clearedWinTrackerHash[key] = 0;
    }

    this.setState({
      locations: clearedLocations,
      winTrackerHash: clearedWinTrackerHash,
      currentPlayer: 'X',
      winner: false
    })
  }

  render() {
    const { locations, winner ,currentPlayer } = this.state
    // console.log('winner: ', winner ) 
    return (
      <div>
        <Title clearBoard={this.clearBoard} />
        <Feed winner={winner} currentPlayer={currentPlayer} />
        <Board locations={locations} winner={winner} takeTurn={this.takeTurn} />
      </div>
    );
  }
}

export default Game;