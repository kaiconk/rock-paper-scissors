
function getRandomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;   
} 

function computerPlay() {

    const MIN_VALUE = 1;
    const MAX_VALUE = 3;

    // Get random number between 1 and 3
    let randomNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);

    switch(randomNumber) {
        case 1:
            // If randomNumber is 1, return 'ROCK' 
            return "ROCK";
            break;
        case 2:
            // If randomNumber is 2, return 'PAPER' 
            return "PAPER";
            break;
        case 3:
            // If randomNumber is 3, return 'SCISSORS' 
            return "SCISSORS";
            break;
            // If randomNumber is anything else, return 'ERROR' 
        default:
            return "ERROR";
    }   
}

function selectionValid(selection) {

    let uCaseSelection = '';

    // If selection is not a string, return false
    if (typeof(selection) !== 'string') { 
        return false;
    }
    // Else if selection is a string, then upper case it
    else if (typeof(selection) === 'string') {
        uCaseSelection = selection.toUpperCase();
    }

    // If selection is Rock, Paper, or Scissors, then return true
    if (uCaseSelection === 'ROCK' || uCaseSelection === 'SCISSORS' || uCaseSelection === 'PAPER') {
        return true;    
    }
    // Otherwise, return false
    else {
        return false;
    }
        
}

function playRound(playerSelection, computerSelection) {

    // Uppercase both selection once, so don't have to keep doing it later (validity already checked)
    const player = playerSelection.toUpperCase();
    const computer = computerSelection.toUpperCase(); 
        
    // Return if player won or lost against computer

    // Player's Paper beats Computer's Rock
    if (player === 'PAPER' && computer === 'ROCK') {
        playerWins += 1;
        console.log("You win! Paper beats Rock!");
    }
    // Computer's Scissors beats Player's Paper
    else if (player === 'PAPER' && computer === 'SCISSORS') {
        computerWins += 1;
        console.log("You lose! Scissors beats Paper!");
    }
    // Paper and paper is a tie
    else if (player === 'PAPER' && computer === 'PAPER') {
        tiedGames += 1;
        console.log("You tied! Paper ties with Paper!");
    }
    // Player's Rock beats Computer's Scissors
    else if (player === 'ROCK' && computer === 'SCISSORS') {
        playerWins += 1;
        console.log("You won! Rock beats Scissors!");
    }
    // Computer's Paper beats Player's Rock
    else if (player === 'ROCK' && computer === 'PAPER') {
        computerWins += 1;
        console.log("You lose! Paper beats rock!");
    }
    // Rock ties with Rock
    else if (player === 'ROCK' && computer === 'ROCK') {
        tiedGames += 1;
        console.log("You tied! Rock ties with Rock!");
    }
    // Player's Scissors beats Computer's Paper
    else if (player === 'SCISSORS' && computer === 'PAPER') {
        playerWins += 1;
        console.log("You won! Scissors beats Paper!");
    }
    // Computer's Rock beats Player's Scissors
    else if (player === 'SCISSORS' && computer === 'ROCK') {
        computerWins += 1;
        console.log("You lose! Rock beats Scissors!");
    }
    // Scissors ties with Scissors
    else if (player === 'SCISSORS' && computer === 'SCISSORS') {
        tiedGames += 1;
        console.log("You tied! Scissors ties with Scissors!");
    }
}

function game() {
    
    const ROUNDS = 5;
    let playerSelection, computerSelection = '';
    let isValidSelection = false;

    // Let human play against computer 5 times
    for(let x = 0; x < ROUNDS; x++) {
        
        // keep prompting user until get valid selection
        do {
            // Get player selection from prompt input
            playerSelection = prompt("Please enter Rock, Paper, or Scissors.");
            // Check whether input was valid
            isValidSelection = selectionValid(playerSelection);
            if (!isValidSelection) {
                alert("Invalid input. Try again!");
            }  
        } while (!isValidSelection)

        // Get computer's random selection
        computerSelection = computerPlay();

        // Compare user and computer selections to return winner
        // Keep tally of total player wins and computer wins count
        playRound(playerSelection, computerSelection);
        
    }

    // Output player and computer score
    console.log("Player score: " + parseInt(playerWins));
    console.log("Computer score: " + parseInt(computerWins));

    alert("Player score: " + parseInt(playerWins));
    alert("Computer score: " + parseInt(computerWins));


    // Output number if tied games (if any)
    if (tiedGames > 0) {
        console.log("Tied Games: " + parseInt(tiedGames));
    }

    // Report winner, loser, or tie
    if (computerWins > playerWins) {
        console.log("Computer won!");
    }
    else if (computerWins < playerWins) {
        console.log("Player won!");
    }
    else if (computerWins === playerWins) {
        console.log("There was a " + parseInt(computerWins) + " - " + parseInt(playerWins) + " tie!");
    }

    alert("See console tab for score!");
}


// keep track of computer wins, player wins, and tied games
let computerWins = 0;
let playerWins = 0;
let tiedGames = 0;

// PLAY GAME HERE!!!!
console.log(game());



