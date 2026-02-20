/*Create a value gameRound = 1*/

let gameRound = 1;

/*Create a function numericalChoice*/ 

function numericalChoice() {
return Math.floor(Math.random() * 3);
}

/* Print Start Game Message*/

console.log("Rock Paper Scissors Game");
console.log("Round "+ gameRound);



/*Assign value of 0 to humanScore and to computerScore*/

let computerScore;
computerScore = 0;
let humanScore;
humanScore = 0;
let getHumanChoice;

/*Create function playRound*/

    if(gameRound <= 6) {

        /*Create a function getHumanChoice*/

    getHumanChoice = prompt("Choose your option: rock, paper, scissors");


/*Create a function getComputerChoice*/

        if (numericalChoice === 0) {
            getComputerChoice = "rock";
        }else if (numericalChoice === 1) {
    getComputerChoice = "paper";
        } else {
        getComputerChoice = "scissors";
}


/*Create Variables humanScore and computerScore*/
console.log(getComputerChoice);
console.log(getHumanChoice);

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
            } else if(getComputerChoice === "paper" && getHumanChoice === "scissors") {
                console.log("You chose: " + getHumanChoice);
                console.log("The computer chose: " + getComputerChoice);
                console.log("Computer won this round");
                gameRound++;
                computerScore++;
            }else{
                console.log("You chose: " + getHumanChoice);
                console.log("The computer chose: " + getComputerChoice);
                console.log("You won this round");
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

    
