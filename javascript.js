let playerWins = 0;
let computerWins = 0;
let playerChoice;
let computerChoice;
let roundResult;
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const roundMessage = document.querySelector('#roundMessage');
const finalMessage = document.querySelector('#finalMessage');
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'ROCK' :
            playerChoice = 'ROCK';
            roundResult = playRound('ROCK');
            break;
        case 'PAPER' :
            playerChoice = 'PAPER';
            roundResult = playRound('PAPER');
            break;
        case 'SCISSORS' :
            playerChoice = 'SCISSORS';
            roundResult = playRound('SCISSORS');
            break;
    }

    switch(roundResult) {
        case 'win' :
            playerWins++;
            playerScore.textContent = playerWins;
            roundMessage.textContent = `${playerChoice} beats ${computerChoice}. You win the round.`;
            break;
        case 'lose' :
            computerWins++;
            computerScore.textContent = computerWins;
            roundMessage.textContent = `${computerChoice} beats ${playerChoice}. You lose the round.`;
            break;
        case 'tie' :
            roundMessage.textContent = "That's a tie. Let's replay that!";
    }
});

// Function Declarations below

function playRound(playerSelection) {
    computerChoice = getComputerChoice();

    if (playerSelection === computerChoice) {
        roundResult = 'tie';
    } else if (playerSelection === 'ROCK') {
        roundResult = (computerChoice === 'PAPER') ? 'lose' : 'win';
    } else if (playerSelection === 'PAPER') {
        roundResult = (computerChoice === 'SCISSORS') ? 'lose' : 'win';
    } else if (playerSelection === 'SCISSORS') {
        roundResult = (computerChoice === 'ROCK') ? 'lose' : 'win';
    } else {
        roundResult = "Error";
    }

    return roundResult;
}

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
