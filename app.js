let board = ["", "", "", "", "", "", "", "", ""];
let count = 0;

const squares = document.querySelectorAll(".square");
squares.forEach((square, index) => {
  square.addEventListener("click", () => {
    if (count % 2 === 0) {
      square.textContent = "X";
      board[index] = "X";
    } else {
      square.textContent = "O";
      board[index] = "O";
    }
    count++;
    square.setAttribute("disabled", true);
    console.log(board);
    checkWin(board);
  });
});

function checkWin(board) {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
    squares.style
    console.log("Win!");
  } else if (
    board[3] === board[4] &&
    board[4] === board[5] &&
    board[3] !== ""
  ) {
    console.log("Win!");
  } else if (
    board[6] === board[7] &&
    board[7] === board[8] &&
    board[6] !== ""
  ) {
    console.log("Win!");
  } else if (
    board[0] === board[3] &&
    board[3] === board[6] &&
    board[0] !== ""
  ) {
    console.log("Win!");
  } else if (
    board[1] === board[4] &&
    board[1] === board[4] &&
    board[1] !== ""
  ) {
    console.log("Win!");
  } else if (
    board[2] === board[5] &&
    board[2] === board[5] &&
    board[2] !== ""
  ) {
    console.log("Win!");
  } else if (
    board[0] === board[4] &&
    board[4] === board[8] &&
    board[0] !== ""
  ) {
    console.log("Win!");
  } else if (
    board[2] === board[4] &&
    board[4] === board[6] &&
    board[2] !== ""
  ) {
    console.log("Win!");
  }
}
