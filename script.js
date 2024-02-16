// Options container
const optionsContainer = document.querySelector(".options-container");
const options = Array.from(optionsContainer.children);

// Result paragraph
const resultParagraph = document.getElementById("round-result");

// Score
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

// Function to generate the computer's choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "IT'S A TIE!";
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")) {
        playerScore.innerText++;
        return "YOU WON!"
    } else {
        computerScore.innerText++;
        return "YOU LOST!";
    }
}

function displayFinalWinner() {
    const winner = (playerScore.innerText == 5) ? "You've" : "Computer has";
    resultParagraph.innerHTML = `${winner} just WON THE GAME!!!!</br>GGs!`
}

// Function to play the game
function playGame(event) {
    let userChoice = event.target.name;
    let computerChoice = getComputerChoice();
    if ((playerScore.innerText == 5) || (computerScore.innerText == 5)) {
        displayFinalWinner();
    } else {
        let result = determineWinner(userChoice, computerChoice);
        resultParagraph.innerHTML = `Computer chose ${computerChoice.toUpperCase()}</br>${result}`;
    }
}

// Add an event listener to each child
options.forEach((child) => child.addEventListener("click", e => {
    playGame(e);
}));
