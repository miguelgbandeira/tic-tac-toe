const boardDiv = document.querySelector(".board-container");

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

  const updateBoardDisplay = function () {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const cellIndex = i * 3 + j;
        const cellElement = document.getElementById(`cell-${cellIndex}`);
        console.log(cellElement);
        cellElement.textContent = board[i][j];
      }
    }
  };

  const setField = (row, col, mark) => {
    return (board[row][col] = mark);
  };

  const getField = (row, col) => {
    return board[row][col];
  };

  return { board, displayBoard, updateBoardDisplay, setField, getField };
}

function createPlayer(name, mark) {
  return { name, mark };
}

function playMove(board, row, col, mark) {
  if (board.getField(row, col) == "") {
    board.setField(row, col, mark);
    return true;
  }
  return false;
}

function isWinner(board, mark) {
  for (let i = 0; i < 3; i++) {
    if (
      (board.getField(i, 0) == mark &&
        board.getField(i, 1) == mark &&
        board.getField(i, 2) == mark) ||
      (board.getField(0, i) == mark &&
        board.getField(1, i) == mark &&
        board.getField(2, i) == mark)
    ) {
      return true;
    }
  }
  if (
    (board.getField(0, 0) == mark &&
      board.getField(1, 1) == mark &&
      board.getField(2, 2) == mark) ||
    (board.getField(2, 0) == mark &&
      board.getField(1, 1) == mark &&
      board.getField(0, 2) == mark)
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
  board.updateBoardDisplay();
  let currentPlayer = playerOne;
  while (true) {
    console.log(`${currentPlayer.name}'s turn:`);
    //let row = parseInt(prompt("Enter row (0-2):"));
    //let col = parseInt(prompt("Enter column (0-2):"));
    let row = 1;
    let col = 1;
    if (row >= 0 && row <= 2 && col >= 0 && col <= 2) {
      if (playMove(board, row, col, currentPlayer.mark)) {
        board.displayBoard();
        board.updateBoardDisplay();
        if (isWinner(board, currentPlayer.mark)) {
          console.log(`Player ${currentPlayer.name} wins!`);
          break;
        } else if (isBoardFull(board.board)) {
          console.log("It's a tie!");
          break;
        }
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
      } else {
        console.log("Invalid move. Try again.");
      }
    } else {
      console.log("Invalid input. Row and column must be between 0 and 2.");
    }
  }
}

tictactoe();
