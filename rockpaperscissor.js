function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a draw!";
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissor") {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    } else if (playerSelection.toLowerCase() === "scissor") {
        if (computerSelection === "rock") {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
        } else {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    }
}

console.log("Hello, world");

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
