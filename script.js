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

  return { board, displayBoard };
}

function createPlayer(name, mark) {
  return { name, mark };
}

function playMove(board, row, col, mark) {
  if (board[row][col] == "") {
    board[row][col] = mark;
    return true;
  }
  return false;
}

function isWinner(board, mark) {
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

function tictactoe() {
  const playerOne = createPlayer("Player1", "X");
  const playerTwo = createPlayer("Player2", "O");
  const board = createBoard();
  board.displayBoard();
  let currentPlayer = playerOne;
  while (true) {
    console.log(`${currentPlayer.name}'s turn:`);
    let row = parseInt(prompt("Enter row (0-2):"));
    let col = parseInt(prompt("Enter column (0-2):"));
    console.log({ row, col });
    if (row >= 0 && row <= 2 && col >= 0 && col <= 2) {
      if (playMove(board.board, row, col, currentPlayer.mark)) {
        board.displayBoard();
        if (isWinner(board.board, currentPlayer.mark)) {
          console.log(`Player ${currentPlayer.name} wins!`);
          break;
        } else if (isBoardFull(board.board)) {
          console.log("It's a tie!");
          break;
        }
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne; // Switch player
      } else {
        console.log("Invalid move. Try again.");
      }
    } else {
      console.log("Invalid input. Row and column must be between 0 and 2.");
    }
  }
}

tictactoe();
