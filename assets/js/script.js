const board = document.querySelector("#board");
const resetButton = document.querySelector("#reset");
const cells = document.querySelectorAll("th");
const message = document.querySelector("#message");
const turnDisplay = document.querySelector("#turn");
let turn = 1;
let stopGame = false;
let winner = "";
let clicks = 0;

board.addEventListener("click", function (e) {
  if (e.target.textContent == "" && !stopGame) {
    e.target.textContent = turn % 2 === 0 ? "O" : "X";
    winner = e.target.textContent;
    clicks += 1;
    turn += 1;

    if (
      (cells[0].textContent !== "" &&
        cells[0].textContent === cells[1].textContent &&
        cells[2].textContent === cells[1].textContent) ||
      (cells[3].textContent !== "" &&
        cells[3].textContent === cells[4].textContent &&
        cells[5].textContent === cells[4].textContent) ||
      (cells[6].textContent !== "" &&
        cells[6].textContent === cells[7].textContent &&
        cells[8].textContent === cells[7].textContent) ||
      (cells[0].textContent !== "" &&
        cells[0].textContent === cells[4].textContent &&
        cells[8].textContent === cells[4].textContent) ||
      (cells[2].textContent !== "" &&
        cells[2].textContent === cells[4].textContent &&
        cells[6].textContent === cells[4].textContent) ||
      (cells[0].textContent !== "" &&
        cells[0].textContent === cells[3].textContent &&
        cells[6].textContent === cells[3].textContent) ||
      (cells[1].textContent !== "" &&
        cells[1].textContent === cells[4].textContent &&
        cells[7].textContent === cells[4].textContent) ||
      (cells[2].textContent !== "" &&
        cells[2].textContent === cells[5].textContent &&
        cells[8].textContent === cells[5].textContent)
    ) {
      message.textContent = "Pemenang: " + winner;
      stopGame = true;
    } else if (clicks === 9) {
      message.textContent = "Seri";
    }

    const nextPlayer = turn % 2 === 0 ? "O" : "X";
    turnDisplay.textContent = "Giliran : " + nextPlayer;
  }
});

resetButton.addEventListener("click", function () {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  turn = 1;
  stopGame = false;
  clicks = 0;
  message.textContent = "";
});
