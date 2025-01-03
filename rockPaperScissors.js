let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");
const selectionPrompt = document.createElement("p");
const humanScorePara = document.createElement("p");
const computerScorePara = document.createElement("p");
selectionPrompt.textContent = "Please make your selection.";
humanScorePara.textContent = "Your score: " + humanScore;
computerScorePara.textContent = "Computer score: " + computerScore;
container.appendChild(selectionPrompt);
container.appendChild(humanScorePara);
container.appendChild(computerScorePara);


function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber === 0 || randomNumber === 1) {
        getComputerChoice();
    }

    if (randomNumber <= 0.3333333333333333) {
        return "rock";
    } else if (randomNumber <= 0.6666666666666666) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    const humanChoiceLowerCase = humanChoice.toLowerCase();
    const humanChoiceInUI = humanChoice[0].toUpperCase() + humanChoiceLowerCase.substring(1);
    const computerChoiceInUI = computerChoice[0].toUpperCase() + computerChoice.substring(1);

    if (humanChoiceLowerCase == computerChoice) {
        console.log("It's a tie - both of us chose " + humanChoiceInUI +"!");
    } else if (humanChoiceLowerCase == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You lose! " + computerChoiceInUI + " beats " + humanChoiceInUI + "!");
    } else if (humanChoiceLowerCase == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You win! " + humanChoiceInUI + " beats " + computerChoiceInUI + "!");
    } else if (humanChoiceLowerCase == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You lose! " + computerChoiceInUI + " beats " + humanChoiceInUI + "!");
    } else if (humanChoiceLowerCase == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You win! " + humanChoiceInUI + " beats " + computerChoiceInUI + "!");
    } else if (humanChoiceLowerCase == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You lose! " + computerChoiceInUI + " beats " + humanChoiceInUI + "!");
    } else if (humanChoiceLowerCase == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You win! " + humanChoiceInUI + " beats " + computerChoiceInUI + "!");
    } else {
        console.log("You made a typo, Human!")
    }
    checkScore();    
}

// check score after every round
// update the score, announce the winner
function checkScore() {
    if (humanScore === 5 || computerScore === 5) {        
        announceWinner();
        swapButtons();
    } else {
        //selectionPrompt.textContent = "Please make your selection.";
        humanScorePara.textContent = "Your score: " + humanScore;
        computerScorePara.textContent = "Computer score: " + computerScore;
    }
}

function announceWinner() {
    if (humanScore > computerScore) {
        selectionPrompt.textContent = "Congratulations, you won!";
    } else {
        selectionPrompt.textContent = "Sorry, you lost.";
    }
}

// change buttons on game over
function swapButtons() {
    announceWinner();
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
    humanScorePara.textContent = "Your score: " + humanScore;
    computerScorePara.textContent = "Computer score: " + computerScore;
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play again!";
    playAgainBtn.onclick = () => location.reload();
    container.appendChild(playAgainBtn);
}

// get the 3 buttons
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

// play a round
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

