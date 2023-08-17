const board = ["", "", "", "", "", "", "", "", ""];

let count = 0;

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (count % 2 === 0) {
      square.textContent = "X";
    } else {
      square.textContent = "O";
    }
    count++;
    square.setAttribute("disabled", true);
  });
});
