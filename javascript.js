alert("Up for a 5-match Rock Paper Scissors?");
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
    let roundsPlayed = 0;
    let roundWins = 0;

    for(let i = 1; i <= 5; i++) {
        playerChoice = prompt('Rock, Paper or Scissors? ');
        getComputerChoice();
        roundResult = playRound(playerChoice, computerChoice);
        switch(roundResult) {
            case 'win' :
                roundWins++;
                roundsPlayed++;
                alert(`Your ${playerChoice} beats my ${computerChoice}. You ${roundWins} - ${roundsPlayed - roundWins} Me`);
                break;
            case 'lose' :
                roundsPlayed++;
                alert(`My ${computerChoice} beats your ${playerChoice}. You ${roundWins} - ${roundsPlayed - roundWins} Me`);
                break;
            case 'tie' :
                alert(`Thats a tie! Let's re-play that! You ${roundWins} - ${roundsPlayed - roundWins} Me`);
                i--;
                break;
            default :
                alert(`You can choose only Rock, Paper or Scissors. You ${roundWins} - ${roundsPlayed - roundWins} Me`);
                i--;
        }
    }

    let roundLosses = 5 - roundWins;
    let winMessage = `You beat me ${roundWins} - ${roundLosses}. Congratulations!`;
    let loseMessage = `I win ${roundLosses} - ${roundWins}. Better luck next time!`;
    let finalMessage = (roundWins >= 3) ? winMessage : loseMessage;

    alert(finalMessage);
}
