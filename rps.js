function playRound(playerSelection, compSelection) {
   
}

// Game starts with the decisions that computer can pick

const choices = ["rock", "paper", "scissors"]; 
function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}
compSelection = getComputerChoice();

let getPlayerChoice = prompt("Please choose rock, paper, or scissors");

if (choices.includes(getPlayerChoice)) {
    alert("Thank you!")
} else {
    prompt("Please try again!")
}

// Ask player for input and compare to premade array to accuracy


// Compare player choice to computer choice 

// Create conditions to decide winner.

// Once winner is decided, add one to winner count until 3