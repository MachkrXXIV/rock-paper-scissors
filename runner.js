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

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toUpperCase();
  let computer= computerSelection.toUpperCase();
  let playWin;

  if (player == computer) {
    return "Tie!";
  }
  else if (player == "ROCK" && computer == "SCISSORS" ||
  player == "SCISSORS" && computer == "PAPER" ||
  player == "PAPER" && computer == "ROCK") {
    playWin = true;
  }
  else {
    playWin = false;
  }

  return playWin ? `You win! ${player} beats ${computer}`
  : `You lose ${computer} beats ${player}`;
}

function game() {
  let playerWinCount = 0;
  let computerWinCount = 0;
  while (playerWinCount < 3 && computerWinCount < 3) {
    let player = prompt("Rock, Paper, or Scissors?");
    let computer = computerPlay();
    let round = playRound(player, computer);
  
    if (round.includes("win")) {
      playerWinCount++;
      alert("Player wins this round!")
      alert(`Score\nPlayer:${playerWinCount}\nComputer:${computerWinCount}`);
    }
    else if (round.includes("lose")) {
      computerWinCount++;
      alert("Computer wins this round!")
      alert(`Score\nPlayer:${playerWinCount}\nComputer:${computerWinCount}`);
    }
    else {
      alert("Its a tie!");
      continue;
    }
  }
  return (playerWinCount > computerWinCount) ? "You win the game!" : "You lose the game!";
}

game();