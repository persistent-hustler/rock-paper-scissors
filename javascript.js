let computerChoice;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0 :
            computerChoice = 'Rock';
            break;
        case 1 :
            computerChoice = 'Paper';
            break;
        case 2 :
            computerChoice = 'Scissors';
            break;
        default:
            computerChoice = 'Computer couldn\'t choose';
    }
}

getComputerChoice();