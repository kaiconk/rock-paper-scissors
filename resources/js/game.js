window.onload = init;

function init() {
    console.log(getRockPaperOrScissors);
}

// document.getElementById("myButton").addEventListener('click', getRockPaperOrScissors());

function getRockPaperOrScissors() {

    // Generate a randon number between 1-3
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    switch(randomNumber) {
        case 1:
            //console.log("Rock");
            return "Rock";
            break;
        case 2:
            //console.log("Paper");
            return "Paper";
            break;
        case 3:
            //console.log("Scissors");
            return "Scissors";
            break;
        default:
            return "Error";
    }
}


