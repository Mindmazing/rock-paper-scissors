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
// scores
let humanScore = 0;
let computerScore = 0;
let rounds = 0;

// get human choice via buttons
const gameButtons = document.querySelector("#game-controls");
const buttons = document.querySelectorAll("button");
const humanCard = document.querySelector("#human-card");
const computerCard = document.querySelector("#computer-card");
const gameTitle = document.querySelector("#game-title");
const humanScoreBoard = document.querySelector("#human-score");
const ComputerScoreBoard = document.querySelector("#computer-score");
const countdownElement = document.querySelector("#vrs-tag");

function changeCardImage(choice, target) {
  switch (choice) {
    case "rock":
      target.innerHTML =
        '<img src="./images/cartoon-rock.png" alt="Rock" class="card-img" />';
      break;
    case "paper":
      target.innerHTML =
        '<img src="./images/cartoon-paper.png" alt="Paper" class="card-img" />';
      break;
    case "scissors":
      target.innerHTML =
        '<img src="./images/cartoon-scissors.png" alt="Scissors" class="card-img" />';
      break;
  }
}

gameButtons.addEventListener("click", (event) => {
  // reset game
  showGame("Rock, Paper, Scissors");
  computerCard.innerHTML = "";

  let humanChoice = event.target.id;
  changeCardImage(humanChoice, humanCard);

  // set timer interval
  timer = 3;
  countdownElement.innerText = timer;
  let countdownInterval = setInterval(() => {
    timer--;

    countdownElement.innerText = timer;
    if (timer === 0) {
      countdownElement.innerText = "Vrs";

      clearInterval(countdownInterval);
    }
  }, 1000);

  setTimeout(() => {
    playGame(humanChoice);
  }, 3000);
  // disable buttons to prevent repetition
  buttons.forEach((button) => {
    button.disabled = true;
  });
});

function incrementPoint(winner, target) {
  let updatedScore = winner + 1;
  target.innerText = updatedScore;
  return updatedScore;
}

function showGame(text) {
  gameTitle.innerText = text;
}

function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    showGame("TIE!");
  } else if (humanChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        showGame("Rock beats Scissors. YOU LOSE!");
        computerScore = incrementPoint(computerScore, ComputerScoreBoard);
        break;
      case "paper":
        showGame("Scissors beats Paper. YOU WIN!");
        humanScore = incrementPoint(humanScore, humanScoreBoard);
        break;
    }
  } else if (humanChoice === "rock") {
    switch (computerChoice) {
      case "scissors":
        showGame("Rock beats Scissors. YOU WIN!");
        humanScore = incrementPoint(humanScore, humanScoreBoard);
        break;
      case "paper":
        showGame("Paper beats Rock. YOU LOSE!");
        computerScore = incrementPoint(computerScore, ComputerScoreBoard);
        break;
    }
  } else {
    switch (computerChoice) {
      case "rock":
        showGame("Paper beats Rock. YOU WIN!");
        humanScore = incrementPoint(humanScore, humanScoreBoard);
        break;
      case "scissors":
        showGame("Scissors beats paper. YOU LOSE!");
        computerScore = incrementPoint(computerScore, ComputerScoreBoard);
        break;
    }
  }
}

function playGame(humanChoice) {
  const computerSelection = getComputerChoice();
  // show computer choice
  changeCardImage(computerSelection, computerCard);
  playRound(humanChoice, computerSelection);
  buttons.forEach((button) => {
    button.disabled = false;
  });
}
