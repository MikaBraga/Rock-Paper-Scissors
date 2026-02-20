/*Create a value gameRound = 1*/

let gameRound = 1;

/*Create a function numericalChoice*/ 

function numericalChoice() {
return Math.floor(Math.random() * 3);
}

/* Print Start Game Message*/

console.log("Rock Paper Scissors Game");
console.log("Round "+ gameRound);

/*Create a function getHumanChoice*/

function getHumanChoice() {
    let getHumanChoice = prompt("Choose your option: rock paper scissors");
    return getHumanChoice.toLowerCase();
}

/*Create a function getComputerChoice*/

function getComputerChoice(numericalChoice) {

if (numericalChoice === 0) {
    return "rock";
}else if (numericalChoice === 1) {
    Return "paper";
} else {
    Return "scissors";
}
}

/*Create Variables humanScore and computerScore*/

int humanScore;
int computerScore;


/*Assign value of 0 to humanScore and to computerScore*/

let computerScore = 0;
return computerScore;
let humanScore = 0;
return humanScore;

/*Create function playRound*/

function playRound() {
    if(gameRound <= 6) {
        if(getComputerChoice = getHumanChoice){
            console.log("It's a draw!")
        } else {
            if(getComputerChoice === "rock" && getComputerChoice === "scissor") {
                console.log("Computer won this round");
                gameRound++;
                computerScore++;
            } else if(getComputerChoice === "scissor" && getHumanChoice === "paper") {
                console.log("Computer won this round");
                gameRound++;
                computerScore++;
            } else if(getComputerChoice === "paper" && getHumanChoice === "scissor") {
                console.log("Computer won this round");
                gameRound++;
                computerScore++;
            }else{
                console.log("Computer won this round");
                gameRound++;
                humanScore++;
                }
         }
         console.log("Your score: " + humanScore);
         console.log("Computer's score: " + computerScore);
    } else {
        console.log("Game finished");
        console.log("Your Score: " + humanScore);
        console.log("Computer's score: " + computerScore);
        if (computerScore > humanScore) {
            console.log("Sorry you lost. Better luck next time!");
        } else {
            console.log("Congratulations you won")
        }
        }
        }
    
