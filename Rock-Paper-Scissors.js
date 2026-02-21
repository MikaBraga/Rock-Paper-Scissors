/* Initialise game round counter */

let gameRound = 1;



/* Display start game message */

console.log("Rock Paper Scissors Game");


/* Initialise scores for human and computer */

let computerScore;
computerScore = 0;
let humanScore;
humanScore = 0;
let getHumanChoice;

/* Start game loop for 5 rounds */

while(gameRound <= 5) {

/* Generate random number for computer choice */

let numericalChoice;
numericalChoice =  Math.floor(Math.random() * 3);

    console.log("Round "+ gameRound);

/* Ask user for their choice */

    getHumanChoice = prompt("Choose your option: rock, paper, scissors");


/* Determine computer choice based on random number */

        if (numericalChoice === 0) {
            getComputerChoice = "rock";
        }else if (numericalChoice === 1) {
            getComputerChoice = "paper";
        } else if (numericalChoice === 2){
            getComputerChoice = "scissors";    
        } else {
            getComputerChoice = "invalid";
}

/* Compare choices and choose the round winner*/
        if(getComputerChoice === getHumanChoice){
            console.log("It's a draw!")
        } else {
            if(getComputerChoice === "rock" && getHumanChoice === "scissors") {
                console.log("You chose: " + getHumanChoice);
                console.log("The computer chose: " + getComputerChoice);
                console.log("Computer won this round");
                gameRound++;
                computerScore++;

            } else if(getComputerChoice === "scissors" && getHumanChoice === "paper") {
                console.log("You chose: " + getHumanChoice);
                console.log("The computer chose: " + getComputerChoice);
                console.log("Computer won this round");
                gameRound++;
                computerScore++;

            } else if(getComputerChoice === "paper" && getHumanChoice === "rock") {
                console.log("You chose: " + getHumanChoice);
                console.log("The computer chose: " + getComputerChoice);
                console.log("Computer won this round");
                gameRound++;
                computerScore++;

            }else if(getComputerChoice === "rock" && getHumanChoice === "paper") {
                console.log("You chose: " + getHumanChoice);
                console.log("The computer chose: " + getComputerChoice);
                console.log("You won this round");
                gameRound++;
                humanScore++;

            } else if(getComputerChoice === "scissors" && getHumanChoice === "rock") {
                console.log("You chose: " + getHumanChoice);
                console.log("The computer chose: " + getComputerChoice);
                console.log("You won this round");
                gameRound++;
                humanScore++;

            } else if(getComputerChoice === "paper" && getHumanChoice === "scissors") {
                console.log("You chose: " + getHumanChoice);
                console.log("The computer chose: " + getComputerChoice);
                console.log("You won this round");
                gameRound++;
                humanScore++;

            }else{
                console.log("Error");
                }
         }
         console.log("Your score: " + humanScore);
         console.log("Computer's score: " + computerScore);
        }

      /* Finish game and announce final winner */
        console.log("Game finished");
        console.log("Your Score: " + humanScore);
        console.log("Computer's score: " + computerScore);
        if (computerScore > humanScore) {
            console.log("Sorry you lost. Better luck next time!");
        } else {
            console.log("Congratulations you won")
        }
        

    
