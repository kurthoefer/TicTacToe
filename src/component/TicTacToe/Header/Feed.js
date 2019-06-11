import React from "react";

const Feed = (props) => {
  const { winner, currentPlayer, roundsLeft } = props
  let feedMessage = '';
  if (winner) {
    feedMessage = `${winner} wins!`
  } else if (roundsLeft === 0) {
    feedMessage = `It's a draw!`
  } else {
    feedMessage = `Go player ${currentPlayer}`
  }
  return (
    <div className='feed-wrapper'>
      <div className='feed'>
        {feedMessage}
      </div>
    </div>
  );
}

export default Feed;