import React from "react";

function Tile(props) {

  const { location } = props
  // console.log('location: ', location)
  if (typeof location === 'string') {
    const chosenPiece = (location === 'X') ? '/assets/tic_tac_toe_X.png' : '/assets/tic_tac_toe_O.png';
    return (
      <div className='tile' onClick={props.takeTurn}>
        <img className='piece' src={chosenPiece}></img>
      </div>
    );
  } else {
    return (
      <div className='tile' onClick={props.takeTurn}>
      </div>
    );
  }

}



export default Tile;