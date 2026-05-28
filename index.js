function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}

function getHumanChoice() {
  let choice = prompt("Choose: Rock, Paper or Scissors");
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function incrementPoint(winner) {
  return winner + 1;
}

function showGame(computerChoice) {
  console.log(`Computer Played: ${computerChoice}`);
}

function playRound(humanChoice, computerChoice) {
  showGame(computerChoice);
  if (computerChoice === humanChoice) {
    console.log("TIE");
  } else if (humanChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        console.log("Rock beats Scissors. YOU LOSE!");
        computerScore = incrementPoint(computerScore);
        break;
      case "paper":
        console.log("Scissors beats Rock. YOU WIN!");
        humanScore = incrementPoint(humanScore);
        break;
    }
  } else if (humanChoice === "rock") {
    switch (computerChoice) {
      case "scissors":
        console.log("Rock beats Scissors. YOU WIN!");
        humanScore = incrementPoint(computerScore);
        break;
      case "paper":
        console.log("Paper beats Rock. YOU LOSE!");
        computerScore = incrementPoint(humanScore);
        break;
    }
  } else {
    switch (computerChoice) {
      case "rock":
        console.log("Paper beats rock. YOU WIN!");
        humanScore = incrementPoint(computerScore);
        break;
      case "scissors":
        console.log("Scissors beats paper. YOU LOSE!");
        computerScore = incrementPoint(humanScore);
        break;
    }
  }
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

playGame();
playGame();
playGame();
playGame();
