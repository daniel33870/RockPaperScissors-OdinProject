console.log("Hello World!");

const rock = 0;
const paper = 1;
const scissors = 2;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let option = Math.random();

    if (option <= 0.33) {
        option = rock;
    } else if (option <= 0.66) {
        option = paper;
    } else {
        option = scissors;
    }
    return option;
}

function getHumanChoice() {
    let option = prompt("Choose Your Option\n0. Rock\n1. Paper\n2. Scissors", 0);
    return parseInt(option);
}

function playRound(computerChoice, humanChoice) {
    let computer = "";
    let human = "";

    if (computerChoice == rock) {
        computer = "rock";
    } else if (computerChoice == paper) {
        computer = "paper";
    } else if (computerChoice == scissors) {
        computer = "scissors";
    }

    if (humanChoice == rock) {
        human = "rock";
    } else if (humanChoice == paper) {
        human = "paper";
    } else if (humanChoice == scissors) {
        human = "scissors";
    }

    console.log("Your Choice: " + human);
    console.log("Computer Choice: " + computer);

    let winnerText = "";

    if (computerChoice == humanChoice) {
        console.log("Nobody Wins");
        winnerText = "It's a tie!";
    } else if (
        (computerChoice == rock && humanChoice == paper) ||
        (computerChoice == paper && humanChoice == scissors) ||
        (computerChoice == scissors && humanChoice == rock)
    ) {
        humanScore++;
        console.log("You win!");
        winnerText = "You win!";
    } else {
        computerScore++;
        console.log("You lose!");
        winnerText = "Computer wins!";
    }

    // Actualizar el score en la página
    document.getElementById("humanScore").innerText = humanScore;
    document.getElementById("computerScore").innerText = computerScore;
    document.getElementById("winner").innerText = "The winner is: " + winnerText;

    console.log("CS || HS\n" + computerScore + " || " + humanScore);
}

// Jugar 5 rondas
/* for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(computerChoice, humanChoice);
} */

   document.getElementById("playButton").addEventListener("click", function(){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);
})