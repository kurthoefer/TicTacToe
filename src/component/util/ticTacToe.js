export const updateWinTrackerHash = (key, winTrackerHash, currentPlayer, boardSize) => {

  // console.log('key: ', key)

  const updatedWinTrackerHash = Object.assign({}, winTrackerHash)
  const playerValue = currentPlayer === 'X' ? 1 : -1;

  const measureForWin = ( hashProperty, playerValue ) => {
    if (Math.abs(updatedWinTrackerHash[hashProperty] + playerValue) === boardSize) return true;
    return false;
  }

  // identify row:
  let row = Math.floor(key / boardSize);
  if (measureForWin(`row${row}`, playerValue)) return 'winner'
  updatedWinTrackerHash[`row${row}`] += playerValue;

  // identify col:
  let col = key % boardSize;
  if (measureForWin(`col${col}`, playerValue)) return 'winner'
  updatedWinTrackerHash[`col${col}`] += playerValue;

  // diagonals:
  if (key % (boardSize + 1) === 0) {
    if (measureForWin(`diag0`, playerValue)) return 'winner'
    updatedWinTrackerHash[`diag0`] += playerValue;
  }
  if (key !== 0 && key !== (Math.pow(boardSize, 2) - 1) && key % (boardSize - 1) === 0) {
    if (measureForWin(`diag1`, playerValue)) return 'winner'
    updatedWinTrackerHash[`diag1`] += playerValue;
  }

  return updatedWinTrackerHash
  
}

