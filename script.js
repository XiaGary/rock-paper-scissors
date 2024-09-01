function getComputerChoice(){
    let choice = Math.random();
    if(choice < 0.33){
        return "rock"
    } else if(choice < 0.66){
        return "paper"
    } else{
        return "scissors"
    }
};

function getHumanChoice(){
    let humanChoice = prompt("Pick rock, paper, or scissors!").toLowerCase()
    return humanChoice;
};

let humanSelection;
let computerSelection;
let humanScore;
let computerScore;

function playGame(n){

    humanScore = 0;
    computerScore = 0;
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice){
        if(humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper'){
            console.log(`You win! Your ${humanChoice} beats the computers ${computerChoice}.`) 
            humanScore++
        } else if(humanChoice === computerChoice){
            console.log(`You tied! You both picked ${humanChoice}.`)
        } else{
            console.log(`You lose! Computer's ${computerChoice} beats your ${humanChoice}.`);
            computerScore++
        }
    }  
    playRound(humanSelection, computerSelection);
}

playGame(5)
