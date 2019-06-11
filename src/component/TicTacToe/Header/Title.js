import React from "react";

const Feed = (props) => {
  return (
    <div className={'title-wrapper'} onClick={props.clearBoard}>
      <p className={'txt-title'}>
        Play Tic Tac Toe
      </p>
      <p className={'txt-small'}>
        (click to restart)
      </p>
    </div>
  );
}


export default Feed;