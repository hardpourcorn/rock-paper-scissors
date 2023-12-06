const choices = ["rock", "paper", "scissors"];
let round = 0;

// Main function. Calls other named functions and looped to add +1 to round until round 5
function playGame() {
    do {
        const playerSelection = getPlayerChoice();
        const compSelection = getComputerChoice();
        console.log(compSelection);
        console.log(checkWinner(playerSelection, compSelection));
        round++;
}

while (round < 5);
if (round = 5) {
    console.log("Game Over!")
}
}


// Function finds a random choice from the array and returns the response as compSelection
function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

// Function asks for playerChoice with prompt and returns prompt response
function getPlayerChoice() {
    const playerChoice = prompt ("Please select rock, paper, or scissors");
    return (playerChoice);
}


// Function calls for playerSelection and compSlection and compares to determine winner.
function checkWinner(playerSelection, compSelection) {
    if (playerSelection === compSelection) {
        return("It's a tie!");
    }
    else if (
        (playerSelection == "rock" && compSelection == "scissors") ||
        (playerSelection == "paper" && compSelection == "rock") ||
        (playerSelection == "scissors" && compSelection == "paper")
    ) {
        return("Player Wins!");
    }
    else if (
        (playerSelection == "rock" && compSelection == "paper") ||
        (playerSelection == "paper" && compSelection == "scissors") ||
        (playerSelection == "scissors" && compSelection == "rock")
    ){
        return("Computer wins!");
    }
}



console.log(playGame());