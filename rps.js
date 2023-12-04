const choices = ["rock", "paper", "scissors"];
let round = 1;
let playerSelection = getPlayerChoice();
let compSelection = getComputerChoice();

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

// getPlayerChoice will return as undefined. Will define but function call cannot find definition

function getPlayerChoice() {
    let playerChoice = prompt ("Please select rock, paper, or scissors");
    if (playerChoice === choices) {
        console.log(playerChoice);
    }
}

function playRound(playerSelection, compSelection) {
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

function playGame() {
    do {getPlayerChoice();
        getComputerChoice();
        console.log(playRound());
        round++;
}

while (round < 5);
}


console.log(playGame());