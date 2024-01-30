function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0 :
            return 'ROCK';
        case 1 :
            return 'PAPER';
        case 2 :
            return 'SCISSORS';
        default:
            return "Computer couldn't choose";
    }
}

function playRound(playerSelection) {
    let roundResult;
    playerSelection = playerSelection.toUpperCase();
    computerSelection = getComputerChoice();

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

// Person has clicked on Rock. What now?

let playerWins = 0;
let computerWins = 0;
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const roundMessage = document.querySelector('#roundMessage');
const finalMessage = document.querySelector('#finalMessage');

const rock = document.querySelector('#ROCK');
rock.addEventListener('click', () => {
    let roundResult = playRound('ROCK');
    switch(roundResult) {
        case 'win' :
            playerWins++;
            roundMessage.textContent = "Computer's choice: scissors. You won the round.";
            break;
        case 'lose' :
            computerWins++;
            roundMessage.textContent = 'Computer chose Paper. You lost the round.';
            break;
        case 'tie' :
            roundMessage.textContent = "We both went rock! That's a tie!";
            break;
    }
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
});