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
  setTimeout(() => {
    playGame(humanChoice);
  }, 3000);
  // disable buttons to prevent repetition
  buttons.forEach((button) => {
    button.disabled = true;
  });
});

function incrementPoint(winner) {
  return winner + 1;
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
        computerScore = incrementPoint(computerScore);
        break;
      case "paper":
        showGame("Scissors beats Rock. YOU WIN!");
        humanScore = incrementPoint(humanScore);
        break;
    }
  } else if (humanChoice === "rock") {
    switch (computerChoice) {
      case "scissors":
        showGame("Rock beats Scissors. YOU WIN!");
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

function playGame(humanChoice) {
  const computerSelection = getComputerChoice();
  // show computer choice
  changeCardImage(computerSelection, computerCard);
  playRound(humanChoice, computerSelection);
  buttons.forEach((button) => {
    button.disabled = false;
  });
}
