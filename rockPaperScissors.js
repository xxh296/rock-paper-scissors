let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    randomNumber = Math.random();
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

function getHumanChoice() {
    return prompt("Enter 'rock', 'paper', or 'scissors'.")
}

function playRound(humanChoice, computerChoice) {
    const humanChoiceLowerCase = humanChoice.toLowerCase();
    const humanChoiceInUI = humanChoice[0].toUpperCase() + humanChoice.substring(1);
    const computerChoiceInUI = computerChoice[0].toUpperCase() + computerChoice.substring(1);

    if (humanChoiceLowerCase == computerChoice) {
        console.log("It's a tie - both of us chose " + humanChoiceInUI +"!");
    } else if (humanChoiceLowerCase == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You lose!" + computerChoiceInUI + " beats " + humanChoiceInUI + "!");
    } else if (humanChoiceLowerCase == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You win!" + humanChoiceInUI + " beats " + computerChoiceInUI + "!");
    } else if (humanChoiceLowerCase == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You lose!" + computerChoiceInUI + " beats " + humanChoiceInUI + "!");
    } else if (humanChoiceLowerCase == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You win!" + humanChoiceInUI + " beats " + computerChoiceInUI + "!");
    } else if (humanChoiceLowerCase == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You lose!" + computerChoiceInUI + " beats " + humanChoiceInUI + "!");
    } else if (humanChoiceLowerCase == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You win!" + humanChoiceInUI + " beats " + computerChoiceInUI + "!");
    } else {
        console.log("You made a typo... Try again, Human!")
    }    
}

//DEBUG
// console.log(getComputerChoice());
// console.log(getHumanChoice());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//DEBUG
console.log(humanScore);
console.log(computerScore);