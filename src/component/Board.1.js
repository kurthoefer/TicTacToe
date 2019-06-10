import React, { Component } from "react";
import Tile from "./Board/Tile.js"

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: 9,
      currentPlayer: 'X',
      locations: [ 
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
      ],
    }
    this.takeTurn = this.takeTurn.bind(this)
  }

  takeTurn(key) {
    // console.log("fire")
    const { locations, currentPlayer } = this.state
    if (locations[key] === 0) {
      // let nextLocations = locations[key] = currentPlayer
      let nextLocations = [...locations]
      nextLocations[key] = currentPlayer
      // currentPlayer = 2
      // console.log(this.state.currentPlayer)
      // console.log(this.state.locations === locations)
      let nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      this.setState({
        // locations: nextLocations, currentPlayer: nextPlayer
        locations: nextLocations, currentPlayer: nextPlayer
      })
    }
  }

  renderTiles() {
    const { locations } = this.state
    return locations ? locations.map((location, i) => <Tile takeTurn={() => this.takeTurn(i)} location={location} key={i}/>) : ''
  }

  render() {
    console.log(this.state.locations)
    const tiles = this.renderTiles.call(this);

    return (
      // resizeable background
      <div className='board-container'>
        <div className='board-frame'>
        </div>
        <div className='board'>
          {tiles}
        </div>
      </div>
    );
  }
}

export default Board;