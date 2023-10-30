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

function game() {
    
    for (let i = 0; i < 5; i++) {

        let player = prompt("Please select your choice: Rock, Paper or Scissors").toLocaleLowerCase();
        const computerSelection = getComputerChoice();

        let roundResult = playRound(player, computerSelection);

        console.log(roundResult);

        if (roundResult == String("You win! " + player + " beats " + computerSelection)) {
            playerScore++;
        } else if (roundResult == String("You lose! " + computerSelection + " beats " + player)) {
            computerScore++;
        }
        
    }
    
    if (playerScore > computerScore ) {
        console.log("Game over! You win!");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore > playerScore) {
        console.log("Game Over! You lose!")
        playerScore = 0;
        computerScore = 0;
    } else {
        console.log("Game Over! Draw!");
        playerScore = 0;
        computerScore = 0;
    }
    
}


game();
