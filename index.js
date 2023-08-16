function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * arr.length);
    return arr[randomChoice];

}

function playerSelection() {
    let sign = prompt("Please select your choice: Rock, Paper or Scissors");

    return sign.toLocaleLowerCase();
}

function playRound(computerSelection) {
    let sign = prompt("Please select your choice: Rock, Paper or Scissors");

    let player = sign.toLocaleLowerCase();

    if (player == computerSelection) {
        return ("Draw! You chose " + player + " and Computer chose "+ computerSelection);
    } else if ( (player == "paper") && (computerSelection=="rock") || 
                (player == "rock") && (computerSelection=="scissors") || 
                (player == "scissors") && (computerSelection==" paper")) {
        return ("You win! " + player + " beats " + computerSelection);
    } else {
        return ("You lose! " + computerSelection + " beats " + player);
    }
}

const computerSelection = getComputerChoice();
console.log(playRound(computerSelection));
