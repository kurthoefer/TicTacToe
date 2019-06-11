import React, { Component } from "react";
import Tile from "./Tile.js"

class Board extends Component {
  constructor(props) {
    super(props);
  }

  makeTiles() {
    const { locations, takeTurn } = this.props
    return locations ? locations.map((location, i) => <Tile takeTurn={() => takeTurn(i)} location={location} key={`tile_${i}`}/>) : ''
  }

  render() {
    // console.log(this.state.locations)
    const tiles = this.makeTiles.call(this);

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