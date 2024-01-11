let computerChoice;
getComputerChoice();
let playerChoice = 'scissors';

console.log(playRound(playerChoice, computerChoice));

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0 :
            computerChoice = 'ROCK';
            break;
        case 1 :
            computerChoice = 'PAPER';
            break;
        case 2 :
            computerChoice = 'SCISSORS';
            break;
        default:
            computerChoice = 'Computer couldn\'t choose';
    }
}

function playRound(playerSelection, computerSelection) {
    let message;
    playerSelection = playerSelection.toUpperCase();
    let loseMessage = `You Lose. ${computerSelection} beats ${playerSelection}.`;
    let winMessage = `You Win. ${playerSelection} beats ${computerSelection}.`;
    if (playerSelection === computerSelection) {
        message = "That's a tie! Let's re-play that!";
    } else if (playerSelection === 'ROCK') {
        message = (computerSelection === 'PAPER') ? loseMessage : winMessage;
    } else if (playerSelection === 'PAPER') {
        message = (computerSelection === 'SCISSORS') ? loseMessage : winMessage;
    } else if (playerSelection === 'SCISSORS') {
        message = (computerSelection === 'ROCK') ? loseMessage : winMessage;
    } else {
        message = "You can only choose Rock, Paper or Scissors.";
    }

    return message;
}