// Game starts with the decisions that computer can pick

let playerCount = 0;
let compCount = 0;

const choices = ["rock", "paper", "scissors"]; 


// Ask player for input and compare to premade array to accuracy
let getPlayerChoice = prompt ("Please select rock, paper, or scissors");
  if (getPlayerChoice === choices) {
        console.log(getPlayerChoice);
}
playerSelection = getPlayerChoice;


function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}
compSelection = getComputerChoice();


// Compare player choice to computer choice 
function playRound(playerSelection, compSelection) {
   if (playerSelection === compSelection) {
    console.log("It's a tie!");
   }
}

// Create conditions to decide winner.

// Once winner is decided, add one to winner count until 3