// Game starts with the decisions that computer can pick

const arr = ["rock", "paper", "scissors"]; 
function getComputerChoice() {
    console.log(arr[(Math.floor(Math.random() * arr.length))]);
}
getComputerChoice()

// Ask player for input and compare to premade array to accuracy

// Compare player choice to computer choice 

// Create conditions to decide winner.

// Once winner is decided, add one to winner count until 3