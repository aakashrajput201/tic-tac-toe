const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector("#resetBtn");
const newButton = document.querySelector("#newBtn");
const message = document.querySelector(".message");
const messageContainer = document.querySelector(".message-container");
let firstPlayer = true;

const winCases = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};
const showWinner = (winner) => {
  message.innerText = `Congratulations, winner is ${winner} !`;
  messageContainer.classList.remove("hide");
  disableBoxes();
};
const resetGame = () => {
  firstPlayer = true;
  enableBoxes();
  messageContainer.classList.add("hide");
};

const checkWinner = () => {
  for (let casee of winCases) {
    let pos1 = boxes[casee[0]].innerText;
    let pos2 = boxes[casee[1]].innerText;
    let pos3 = boxes[casee[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (firstPlayer) {
      box.innerText = "O";
      firstPlayer = false;
    } else {
      box.innerText = "X";
      firstPlayer = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

resetButton.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);
