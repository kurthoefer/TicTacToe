import React, { Component } from "react";
import Tile from "./Tile.js"

class Board extends Component {
  constructor(props) {
    super(props);
  }

  makeTiles() {
    const { locations, takeTurn } = this.props;
    return locations ? locations.map((location, i) => <Tile takeTurn={() => takeTurn(i)} location={location} key={`tile_${i}`}/>) : '';
  }

  render() {
    const tiles = this.makeTiles.call(this);
    const spacersClass = this.props.winner ? 'spacers spacers-winner' : 'spacers';

    return (
      // resizeable background
      <div className='board-wrapper'>
        <div className='board-frame'>
          {tiles}
        </div>
        <div className={spacersClass}>
        </div>
      </div>
    );
  }
}

export default Board;