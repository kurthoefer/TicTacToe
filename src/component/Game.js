import React, { Component } from "react";
import Board from "./Board/Board.js"

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardSize: 3,
      // rounds: 9,
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
    // this.updateWinTrackerHash = this.updateWinTrackerHash.bind(this)
  }

  updateWinTrackerHash(key) {
    const { winTrackerHash, currentPlayer, boardSize } = this.state

    console.log('key:' , key)

    let updatedWinTrackerHash = Object.assign({}, winTrackerHash)
    let playerValue = currentPlayer === 'X' ? 1 : -1;

    this.measureForWin = ( hashProperty, playerValue ) => {
      if (Math.abs(updatedWinTrackerHash[hashProperty] + playerValue) === boardSize) return true;
      return false;
    }

    // identify row:
    let row = Math.floor(key / boardSize);
    if (this.measureForWin(`row${row}`, playerValue)) return 'winner'
    updatedWinTrackerHash[`row${row}`] += playerValue;

    // identify col:
    let col = key % boardSize;
    if (this.measureForWin(`col${col}`, playerValue)) return 'winner'
    updatedWinTrackerHash[`col${col}`] += playerValue;

    // diagonal(s):
    if (key % (boardSize + 1) === 0) {
      if (this.measureForWin(`diag0`, playerValue)) return 'winner'
      updatedWinTrackerHash[`diag0`] += playerValue;
    }
    if (key !== 0 && key !== (Math.pow(boardSize, 2) - 1) && key % (boardSize - 1) === 0) {
      if (this.measureForWin(`diag1`, playerValue)) return 'winner'
      updatedWinTrackerHash[`diag1`] += playerValue;
    }

    return updatedWinTrackerHash

  }

  takeTurn(key) {
    const { locations, currentPlayer, winner, boardSize } = this.state
    if (locations[key] === 0 && !winner) {
      let nextLocations = [...locations]
      nextLocations[key] = currentPlayer
      let nextPlayer = currentPlayer === 'X' ? 'O' : 'X';

      let updatedWinTrackerHash = this.updateWinTrackerHash(key)

      if (updatedWinTrackerHash === 'winner') {
        // this.setState((prevState, props) => {
        //   return {
        //     locations: nextLocations,
        //     winner: prevState.currentPlayer
        //   }
        // })
        this.setState({
          locations: nextLocations,
          winner: currentPlayer
        });
      } else {
        console.log('state is setting')
        this.setState({
          locations: nextLocations,
          winTrackerHash: updatedWinTrackerHash,
          currentPlayer: nextPlayer
        });
      }
    }
  }

  clearBoard() {
    const { locations, winTrackerHash } = this.state
    // make arr of len 'rounds' with all values '0'
    // let clearedLocations = [...locations].fill(0);
    let clearedLocations = [...locations];
    clearedLocations.fill(0)

    let clearedWinTrackerHash = Object.assign({}, winTrackerHash)
    for (let key in clearedWinTrackerHash) {
      clearedWinTrackerHash[key] = 0;
    }
    // Object.keys(clearedLocations).forEach(k => clearedLocations[k])

    // for (let i = rounds; i > 0; i--) {
    //   clearedLocations.push(0)
    // }

    this.setState({
      locations: clearedLocations,
      winTrackerHash: clearedWinTrackerHash,
      currentPlayer: 'X',
      winner: false
    })
  }

  render() {
    const { locations, winner ,winTrackerHash } = this.state
    console.log('winner: ', winner ) 
    console.log('win hash: ', winTrackerHash ) 
    return (
      <div>
        <div className={'title-wrapper'} onClick={this.clearBoard}>
          <p className={'txt-title'}>
            Play Tic Tac Toe
          </p>
          <p className={'txt-small'}>
            (click to restart)
          </p>
        </div>
        <Board locations={locations} takeTurn={this.takeTurn}/>
      </div>
    );
  }
}

export default Game;