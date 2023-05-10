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
    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
    }
    if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
        playerScore++;
        roundWinner = 'player';
    }
    if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "rock")) {
        computerScore++;
        roundWinner = 'computer'
    }

}

function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
    updateScore()
}

function updateScore() {
    if (roundWinner === 'tie') {
        extraText.textContent = "Draw."
    } else if (roundWinner === 'player') {
        extraText.textContent = "Victory."
    } else if (roundWinner === 'computer') {
        extraText.textContent = "Defeat."
    }
    
    pscore.textContent = `${playerScore}`
    cscore.textContent = `${computerScore}`
}

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const brock = document.getElementById('brock');
const bpaper = document.getElementById('bpaper');
const bscissor = document.getElementById('bscissor');
const pscore = document.getElementById('pscore');
const cscore = document.getElementById('cscore');
const extraText = document.getElementById('extraText');

pscore.textContent = playerScore;
cscore.textContent = computerScore;
extraText.textContent = '';

brock.addEventListener('click', () => handleClick('rock'));
bpaper.addEventListener('click', () => handleClick('paper'));
bscissor.addEventListener('click', () => handleClick('scissor'));