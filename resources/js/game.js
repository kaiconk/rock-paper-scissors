//window.onload = init();

//function init() {
 //   console.log(getRockPaperOrScissors);
// }

//document.getElementById("myButton").addEventListener('click', getRockPaperOrScissors());

function getRandomNumber(min, max) { 

    return Math.floor(Math.random() * (max - min + 1)) + min;
    
} 
function getRockPaperOrScissors() {

    // Generate a randon number between 1-3
    const MIN_VALUE = 1;
    const MAX_VALUE = 3;

    let randomNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);

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

console.log(getRockPaperOrScissors());
console.log(getRockPaperOrScissors());
console.log(getRockPaperOrScissors());
console.log(getRockPaperOrScissors());
console.log(getRockPaperOrScissors());
console.log(getRockPaperOrScissors());


