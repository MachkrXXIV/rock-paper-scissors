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