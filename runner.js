let playerScore = 0;
let computerScore = 0;

// Selectors 
const body = document.querySelector("body");
const btns = document.querySelectorAll(".btn");
const playerPoints = document.querySelector("#player-score");
const computerPoints = document.querySelector("#computer-score");
const results = document.querySelector(".round-results");

// Functions
function computerPlay() {
  let hand = Math.floor(Math.random() * 3) + 1;
  if (hand == 1) {
    return "Rock";
  }
  else if (hand == 2) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
}

function playRound(playerSelection) {
  player = capitalize(playerSelection);
  computer = capitalize(computerPlay());
  let playWin;

  if (player == computer) {
    results.textContent =`Tie! It's ${player} on ${computer} violence!`;
    return;
  }
  else if (player == "Rock" && computer == "Scissors" ||
  player == "Scissors" && computer == "Paper" ||
  player == "Paper" && computer == "Rock") {
    playerScore++;
    playWin = true;
  }
  else {
    computerScore++;
    playWin = false;
  }

  updateScore();
  results.textContent = playWin ? `You win! ${player} beats ${computer}`
  : `You lose ${computer} beats ${player}`;
}

function updateScore() {
  playerPoints.textContent = `Player Score: ${playerScore}`;
  computerPoints.textContent = `Computer Score: ${computerScore}`;
}

function announceWinner(playerScore, computerScore) {
  let winner = (playerScore > computerScore) ? "Player wins the game!" : "Computer wins the game!";
  const end = document.createElement("div");
  body.appendChild(end);

  end.textContent = winner;
}

function newGame() {
  const restart = document.createElement("button");
  restart.textContent = "Play again";
  body.appendChild(restart);
  
  restart.addEventListener("click", () => {
    window.location.reload(true)
  });
}

// Starts game on click of button
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    let playerSelection = btn.id;
    playRound(playerSelection);

    if (playerScore == 5 || computerScore == 5) {
      announceWinner(playerScore, computerScore);
      newGame();
    }
  })
})

// Helper functions
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


