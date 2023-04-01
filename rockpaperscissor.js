function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
        return "rock"
    } else if (choice === 2) {
        return "paper"
    } else {
        return "scissor"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("It's a draw!");
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        } else {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}!`)
        }
    }
}