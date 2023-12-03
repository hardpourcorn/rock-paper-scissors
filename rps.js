// Game starts with the decisions that computer can pick
const choices = ["rock", "paper", "scissors"];
let playerCount = 0;
let compCount = 0;

let getPlayerChoice = prompt ("Please select rock, paper, or scissors");
  if (getPlayerChoice === choices) {
        console.log(getPlayerChoice);
}

function playGame(playerSelection) {
    if (playerCount < 3 && compCount < 3) {
        const playerSelection = getPlayerChoice;
        const compSelection = getComputerChoice();
        const roundWinner = playRound(playerSelection, compSelection);
    }
    else if (playerCount === 3) {
        print ("Player Wins!")
    }
    else if (compCount === 3) {
        print ("Computer Wins!")
    }
}


// Ask player for input and compare to premade array to accuracy 
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




// Get Random choice for computer
function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}


console.log(playGame());
// playGame function is stuck in an infinite loop where I can't ask for another prompt. Need to find out how to ask for one input per round. 