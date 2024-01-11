let computerChoice; 
let playerChoice;


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
    let roundResult;
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        roundResult = 'tie';
    } else if (playerSelection === 'ROCK') {
        roundResult = (computerSelection === 'PAPER') ? 'lose' : 'win';
    } else if (playerSelection === 'PAPER') {
        roundResult = (computerSelection === 'SCISSORS') ? 'lose' : 'win';
    } else if (playerSelection === 'SCISSORS') {
        roundResult = (computerSelection === 'ROCK') ? 'lose' : 'win';
    } else {
        roundResult = "Error";
    }

    return roundResult;
}

