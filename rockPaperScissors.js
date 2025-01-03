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
// Close this out : adding UI
// function getHumanChoice() {
//     return prompt("Enter 'rock', 'paper', or 'scissors'.")
// }

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

/* Adding UI - 
Turn off the logic that plays 5 rounds
*/
/*
function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

function announceWinner() {
    if (humanScore > computerScore) {
        console.log("Congratulations, you won!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost.");
    } else {
        console.log("Nobody won, it's a tie.")
    }
}

// launch game, and declare results
playGame();
announceWinner();
console.log("Your Human score: " + humanScore);
console.log("Computer score: " + computerScore);

*/

// check score
// run this after every round
// TODO : change UI per these messages
function checkScore() {
    if (humanScore === 5 || computerScore === 5) {
        announceWinner();
        humanScorePara.textContent = "Your score: " + humanScore;
        computerScorePara.textContent = "Computer score: " + computerScore;
        // console.log("Change the interface: announce winner, show score, reset button, remove the 3 selection buttons.")
    } else {
        // console.log("Make a selection text. Display score.")
        selectionPrompt.textContent = "Please make your selection.";
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

// get the 3 buttons
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

// play a round
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

