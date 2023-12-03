// Game starts with the decisions that computer can pick
const choices = ["rock", "paper", "scissors"];
let playerCount = 0;
let compCount = 0;
let round = 1;


let getPlayerChoice = prompt ("Please select rock, paper, or scissors");
  if (getPlayerChoice === choices) {
        console.log(getPlayerChoice);
}
function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length) + 1)];
}

const playerSelection = getPlayerChoice;
const compSelection = getComputerChoice();



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

function playGame() {
    if (round < 5) {
        playRound(playerSelection, compSelection);
        console.log("Round " + round + " winner ");
        round++;
}
}

console.log(playGame());






console.log(playGame(playRound()));
// playGame function is stuck in an infinite loop where I can't ask for another prompt. Need to find out how to ask for one input per round. 