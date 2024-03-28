function tictactoe() {
  const playerOne = createPlayer("Player1", "X");
  const playerTwo = createPlayer("Player2", "O");
  const board = createBoard();
}

function createBoard() {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const displayBoard = function () {
    console.log("Current Board:");
    for (let row of board) {
      console.log(row.join(" | "));
    }
  };

  return { displayBoard };
}

function createPlayer(name, mark) {
  return { name, mark };
}

function playMove(mark, row, col, board) {
  if (board[row][col] == "") {
    board[row][col] = mark;
    return true;
  }
  return false;
}

function isWinner(mark, board) {
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] == mark && board[i][1] == mark && board[i][2] == mark) ||
      (board[0][i] == mark && board[1][i] == mark && board[2][i] == mark)
    ) {
      return true;
    }
  }
  if (
    (board[0][0] == mark && board[1][1] == mark && board[2][2] == mark) ||
    (board[2][0] == mark && board[1][1] == mark && board[0][2] == mark)
  ) {
    return true;
  }
  return false;
}

function isBoardFull(board) {
  for (let row of board) {
    for (let cell of row) {
      if (cell == "") {
        return false;
      }
    }
  }
  return true;
}

const board = createBoard();
board.displayBoard();
