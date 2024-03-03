let board: string[][] = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];

let currentPlayer: string = "X";

function printBoard(): void {
  console.log("  0 1 2");
  for (let i = 0; i < 3; i++) {
    process.stdout.write(`${i} `);
    for (let j = 0; j < 3; j++) {
      process.stdout.write(`${board[i][j]} `);
    }
    console.log();
  }
}

function checkWin(): boolean {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !== "_" &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    ) {
      return true;
    }
    if (
      board[0][i] !== "_" &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    ) {
      return true;
    }
  }
  if (
    board[0][0] !== "_" &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    return true;
  }
  if (
    board[0][2] !== "_" &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    return true;
  }
  return false;
}

function checkDraw(): boolean {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "_") {
        return false;
      }
    }
  }
  return true;
}

function switchPlayer(): void {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function playTurn(row: number, col: number): void {
  if (row < 0 || row > 2 || col < 0 || col > 2 || board[row][col] !== "_") {
    console.log("Invalid move! Try again.");
    return;
  }
  board[row][col] = currentPlayer;
  if (checkWin()) {
    console.log(`${currentPlayer} wins!`);
    return;
  }
  if (checkDraw()) {
    console.log("It's a draw!");
    return;
  }
  switchPlayer();
}

// function promptPlayer(): void {
//   rl.question(
//     `Player ${currentPlayer}, enter your move (row column): `,
//     (answer) => {
//       const [row, col] = answer.split(" ").map((x) => parseInt(x));
//       playTurn(row, col);
//       printBoard();
//       promptPlayer();
//     }
//   );
// }

printBoard();
//promptPlayer();
