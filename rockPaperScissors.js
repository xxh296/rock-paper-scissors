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

//DEBUG
// console.log(getComputerChoice());
console.log(getHumanChoice());