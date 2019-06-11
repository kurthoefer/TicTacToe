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
    const tiles = this.makeTiles.call(this);

    return (
      // resizeable background
      <div className='board-wrapper'>
        <div className='board-frame'>
          {tiles}
        </div>
        <div className='spacers'>
        </div>
      </div>
    );
  }
}

export default Board;