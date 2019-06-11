import React from "react";

const Feed = (props) => {
  const { winner, currentPlayer } = props
  if (winner) {
    return (
      <div className='feed-wrapper'>
        <div className='feed'>
          {winner} wins!
        </div>
      </div>
    );
  } else {
    return (
      <div className='feed-wrapper'>
        <div className='feed'>
          Go player {currentPlayer}
        </div>
      </div>
    );
  }

}

export default Feed;