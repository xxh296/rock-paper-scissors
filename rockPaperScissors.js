let humanScore = 0;
let computerScore = 0;

const ScoreMessages = {
    YOUR_SCORE: "Your score: ",
    COMP_SCORE: "Computer's score: "
};

const container = document.querySelector("#container");
const selectionPrompt = document.createElement("p");
const humanScorePara = document.createElement("p");
const computerScorePara = document.createElement("p");
selectionPrompt.textContent = "Please make your selection.";
humanScorePara.textContent = ScoreMessages.YOUR_SCORE + humanScore;
computerScorePara.textContent = ScoreMessages.COMP_SCORE + computerScore;
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

    const ResultMessages = {
        TIE: "It's a tie - both of us chose ",
        WIN: "You win! ",
        LOSE: "You lose! ",
        BEATS: " beats ",
        NEXT_SELECTION: "Make your next selection!",
    };

    switch (true) {
        case (humanChoiceLowerCase == computerChoice):
            selectionPrompt.textContent = ResultMessages.TIE + humanChoiceInUI + ". " + ResultMessages.NEXT_SELECTION;
            break;
        case (humanChoiceLowerCase == "rock" && computerChoice == "paper"):
            computerScore++;
            selectionPrompt.textContent = ResultMessages.LOSE + computerChoiceInUI + ResultMessages.BEATS + humanChoiceInUI + ". " + ResultMessages.NEXT_SELECTION;
            break;
        case (humanChoiceLowerCase == "rock" && computerChoice == "scissors"):
            humanScore++;
            selectionPrompt.textContent = ResultMessages.WIN + humanChoiceInUI + ResultMessages.BEATS + computerChoiceInUI + ". " + ResultMessages.NEXT_SELECTION;
            break;
        case (humanChoiceLowerCase == "paper" && computerChoice == "scissors"):
            computerScore++;
            selectionPrompt.textContent = ResultMessages.LOSE + computerChoiceInUI + ResultMessages.BEATS + humanChoiceInUI + ". " + ResultMessages.NEXT_SELECTION;
            break;
        case (humanChoiceLowerCase == "paper" && computerChoice == "rock"):
            humanScore++;
            selectionPrompt.textContent = ResultMessages.WIN + humanChoiceInUI + ResultMessages.BEATS + computerChoiceInUI + ". " + ResultMessages.NEXT_SELECTION;
            break;
        case (humanChoiceLowerCase == "scissors" && computerChoice == "rock"):
            computerScore++;
            selectionPrompt.textContent = ResultMessages.LOSE + computerChoiceInUI + ResultMessages.BEATS + humanChoiceInUI + ". " + ResultMessages.NEXT_SELECTION;
            break;
        case (humanChoiceLowerCase == "scissors" && computerChoice == "paper"):
            humanScore++;
            selectionPrompt.textContent = ResultMessages.WIN + humanChoiceInUI + ResultMessages.BEATS + computerChoiceInUI + ". " + ResultMessages.NEXT_SELECTION;
            break;
        default:
            console.log("You made a typo, Human...");
            break;
    } 

    checkScore();    
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

// play a round
rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

// to be called from playRound(a,b)
function checkScore() {
    if (humanScore === 5 || computerScore === 5) {        
        announceWinner();
        swapButtons();
    } else {
        humanScorePara.textContent = ScoreMessages.YOUR_SCORE + humanScore;
        computerScorePara.textContent = ScoreMessages.COMP_SCORE + computerScore;
    }
}

function announceWinner() {
    if (humanScore > computerScore) {
        selectionPrompt.textContent = "Congratulations, you won!";
    } else {
        selectionPrompt.textContent = "Sorry, you lost.";
    }
}

// 'Play Again' button on gameover
function swapButtons() {
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
    humanScorePara.textContent = ScoreMessages.YOUR_SCORE + humanScore;
    computerScorePara.textContent = ScoreMessages.COMP_SCORE + computerScore;
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play again";
    playAgainBtn.onclick = () => location.reload();
    container.appendChild(playAgainBtn);
}