let playerScore = 0;
let computerScore = 0;
let winner = "";

const endScore = 5;

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const scoreInfo = document.getElementById("score-info");

const body = document.querySelector("body");

const resetBtn = document.createElement("button");
resetBtn.textContent = "Play another round!";
resetBtn.addEventListener("click", () => {
  resetGame();
});

const winnerMessageElement = document.createElement("p");

rockBtn.addEventListener("click", () => {
  handleClick("ROCK");
});

paperBtn.addEventListener("click", () => {
  handleClick("PAPER");
});

scissorsBtn.addEventListener("click", () => {
  handleClick("SCISSORS");
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    winner = "tie";
  }

  if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    return (winner = "player");
  }
  if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    return (winner = "player");
  }
  if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    return (winner = "player");
  }

  return (winner = "computer");
}

function handleClick(playerSelection) {
  const computerChoice = getRandomChoice();
  let roundWinner = playRound(playerSelection, computerChoice);
  updateScore(roundWinner);

  let isGameEnd = computerScore >= endScore || playerScore >= endScore;
  if (isGameEnd) {
    displayEndScreen();
  }
}

function updateScore(roundWinner) {
  if (roundWinner === "player") {
    playerScore++;
  } else if (roundWinner === "computer") {
    computerScore++;
  }

  scoreInfo.textContent =
    "Player " + playerScore + ":" + computerScore + " Computer";
}

function getRandomChoice() {
  const rand = Math.floor(Math.random() * 3);
  if (rand === 0) return "ROCK";
  if (rand === 1) return "PAPER";
  return "SCISSORS";
}

function displayEndScreen() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;

  const winner = playerScore >= endScore ? "Player" : "Computer";

  winnerMessageElement.textContent = `Winner Winner Chicken Dinner for ${winner}!`;

  body.appendChild(winnerMessageElement);
  body.appendChild(resetBtn);
}

function resetGame() {
  body.removeChild(winnerMessageElement);
  body.removeChild(resetBtn);

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  computerScore = 0;
  playerScore = 0;
  scoreInfo.textContent =
    "Player " + playerScore + ":" + computerScore + " Computer";
}
