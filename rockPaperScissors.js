function getComputerChoice() {
    // improve /3 precision
    randomNumber = Math.random();
    if (randomNumber === 0 || randomNumber === 1) {
        getComputerChoice();
    }
    // DEBUG
    console.log("randomNumber = " + randomNumber);

    if (randomNumber <= 0.3333333333333333) {
        return "rock";
    } else if (randomNumber <= 0.6666666666666666) {
        return "paper";
    } else {
        return "scissors";
    }
}

//DEBUG
console.log(getComputerChoice());