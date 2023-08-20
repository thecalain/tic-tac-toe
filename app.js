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
  });
});

