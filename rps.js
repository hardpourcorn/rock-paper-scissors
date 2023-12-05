const choices = ["rock", "paper", "scissors"];
let round = 1;

function playGame() {
    do {
        const playerSelection = getPlayerChoice();
        const compSelection = getComputerChoice();
        console.log(compSelection);
        console.log(checkWinner(playerSelection, compSelection));
        round++;
}

while (round < 5);
}



function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

// getPlayerChoice will return as undefined. Will define but function call cannot find definition


function getPlayerChoice() {
    const playerChoice = prompt ("Please select rock, paper, or scissors");
    return (playerChoice);
}

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