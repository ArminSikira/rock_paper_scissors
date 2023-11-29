let playerScore = 0;
let computerScore = 0;
let winner = "";


function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * arr.length);
    return arr[randomChoice];

}

function playRound(player, computerSelection) {

    if (player == computerSelection) {
        return String("Draw! You chose " + player + " and Computer chose " + computerSelection);
    }
    if ((player == "paper") && (computerSelection == "rock") ||
        (player == "rock") && (computerSelection == "scissors") ||
        (player == "scissors") && (computerSelection == " paper")) {
        return String("You win! " + player + " beats " + computerSelection);

    } else {
        return String("You lose! " + computerSelection + " beats " + player);

    }
}


