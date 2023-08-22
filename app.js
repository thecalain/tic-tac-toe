let board = ["", "", "", "", "", "", "", "", ""];
let count = 0;

const squares = document.querySelectorAll(".square");
const squaresArray = [...squares];
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
    squaresArray.forEach((square, index) => {
      if (index === 1 || index === 2 || index === 0) {
        square.style.background = "yellow";
      }
    });

    console.log("Win!");
  } else if (
    board[3] === board[4] &&
    board[4] === board[5] &&
    board[3] !== ""
  ) {
    squaresArray.forEach((square, index) => {
      if (index === 3 || index === 4 || index === 5) {
        square.style.background = "yellow";
      }
    });
    console.log("Win!");
  } else if (
    board[6] === board[7] &&
    board[7] === board[8] &&
    board[6] !== ""
  ) {
    squaresArray.forEach((square, index) => {
      if (index === 6 || index === 7 || index === 8) {
        square.style.background = "yellow";
      }
    });
    console.log("Win!");
  } else if (
    board[0] === board[3] &&
    board[3] === board[6] &&
    board[0] !== ""
  ) {
    squaresArray.forEach((square, index) => {
      if (index === 3 || index === 6 || index === 0) {
        square.style.background = "yellow";
      }
    });
    console.log("Win!");
  } else if (
    board[1] === board[4] &&
    board[4] === board[7] &&
    board[1] !== ""
  ) {
    squaresArray.forEach((square, index) => {
      if (index === 1 || index === 4 || index === 7) {
        square.style.background = "yellow";
      }
    });
    console.log("Win!");
  } else if (
    board[2] === board[5] &&
    board[5] === board[8] &&
    board[2] !== ""
  ) {
    squaresArray.forEach((square, index) => {
      if (index === 5 || index === 2 || index === 8) {
        square.style.background = "yellow";
      }
    });
    console.log("Win!");
  } else if (
    board[0] === board[4] &&
    board[4] === board[8] &&
    board[0] !== ""
  ) {
    squaresArray.forEach((square, index) => {
      if (index === 4 || index === 8 || index === 0) {
        square.style.background = "yellow";
      }
    });
    console.log("Win!");
  } else if (
    board[2] === board[4] &&
    board[4] === board[6] &&
    board[2] !== ""
  ) {
    squaresArray.forEach((square, index) => {
      if (index === 4 || index === 2 || index === 6) {
        square.style.background = "yellow";
      }
    });
    console.log("Win!");
  }
}

  const reset = document.getElementById("reset")
  reset.addEventListener("click", () => location.reload())