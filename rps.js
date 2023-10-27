// Game starts with the decisions that computer can pick
const choices = ["rock", "paper", "scissors"];
let playerCount = 0;
let compCount = 0;




// Ask player for input and compare to premade array to accuracy
let getPlayerChoice = prompt ("Please select rock, paper, or scissors");
  if (getPlayerChoice === choices) {
        console.log(getPlayerChoice);
}
const playerSelection = getPlayerChoice;

// Get Random choice for computer
function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}
const compSelection = getComputerChoice();



// Compare player choice to computer choice 
function playRound(playerSelection, compSelection) {
    if (playerSelection === compSelection) {
        console.log("It's a tie!");
    }
    else if (
        (playerSelection == "rock" && compSelection == "scissors") ||
        (playerSelection == "paper" && compSelection == "rock") ||
        (playerSelection == "scissors" && compSelection == "paper")
    ) {
        console.log("Player Wins!");
    }
    else if (
        (playerSelection == "rock" && compSelection == "paper") ||
        (playerSelection == "paper" && compSelection == "scissors") ||
        (playerSelection == "scissors" && compSelection == "rock")
    ){
        console.log("Computer wins!");
    }
}

console.log(playRound(playerSelection, compSelection));


// Having issues where computer has not won a single round

// Create conditions to decide winner.

// Once winner is decided, add one to winner count until 3