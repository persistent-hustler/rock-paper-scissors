let computerChoice; 
let playerChoice;
game();

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

function game() {
    let roundResult;
    let roundWins = 0;

    for(let i = 1; i <= 5; i++) {
        playerChoice = prompt('Rock, Paper or Scissors? ');
        getComputerChoice();
        roundResult = playRound(playerChoice, computerChoice);
        switch(roundResult) {
            case 'win' :
                console.log(`Your ${playerChoice} beats my ${computerChoice}`);
                roundWins++;
                break;
            case 'lose' :
                console.log(`My ${computerChoice} beats your ${playerChoice}`);
                break;
            case 'tie' :
                console.log("Thats a tie! Let's re-play that!");
                i--;
                break;
            default :
                console.log("You can choose only Rock, Paper or Scissors.");
                i--;
        }
    }

    let roundLosses = 5 - roundWins;
    let winMessage = `You beat me ${roundWins} - ${roundLosses}. Congratulations!`;
    let loseMessage = `I win ${roundLosses} - ${roundWins}. Better luck next time!`;
    let finalMessage = (roundWins >= 3) ? winMessage : loseMessage;

    console.log(finalMessage);
    alert(finalMessage);
}
