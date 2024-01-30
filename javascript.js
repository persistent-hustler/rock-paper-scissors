let playerWins = 0;
let computerWins = 0;
let computerChoice;
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const roundMessage = document.querySelector('#roundMessage');
const finalMessage = document.querySelector('#finalMessage');
const rock = document.querySelector('#ROCK');
const paper = document.querySelector('#PAPER');
const scissors = document.querySelector('#SCISSORS');


rock.addEventListener('click', () => {
    let roundResult = playRound('ROCK');
    switch(roundResult) {
        case 'win' :
            playerWins++;
            roundMessage.textContent = "Computer's choice: Scissors. You won the round.";
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

paper.addEventListener('click', () => {
    let roundResult = playRound('PAPER');
    switch(roundResult) {
        case 'win' :
            playerWins++;
            roundMessage.textContent = "Computer's choice: Rock. You won the round.";
            break;
        case 'lose' :
            computerWins++;
            roundMessage.textContent = 'Computer chose Scissors. You lost the round.';
            break;
        case 'tie' :
            roundMessage.textContent = "We both went Paper! That's a tie!";
            break;
    }
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
});

scissors.addEventListener('click', () => {
    let roundResult = playRound('SCISSORS');
    switch(roundResult) {
        case 'win' :
            playerWins++;
            roundMessage.textContent = "Computer's choice: Paper. You won the round.";
            break;
        case 'lose' :
            computerWins++;
            roundMessage.textContent = 'Computer chose Rock. You lost the round.';
            break;
        case 'tie' :
            roundMessage.textContent = "We both went Scissors! That's a tie!";
            break;
    }
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
});

// Function Declarations below

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
