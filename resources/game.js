
function generateRockPaperScissors() {

    // Generate a randon number between 1-3
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch(randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return "Error";
    }
}
