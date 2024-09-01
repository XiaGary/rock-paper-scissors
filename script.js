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
getComputerChoice()

let humanChoice;
function getHumanChoice(){
    humanChoice = prompt("Pick rock, paper, or scissors!").toLowerCase()
    return humanChoice;
};

let humanSelection;
let computerSelection;
let humanScore;
let computerScore;

function playGame(nTimes){

        
    humanScore = 0;
    computerScore = 0;

    

    for(let i = 1; i <= nTimes; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    function playRound(humanChoice, computerChoice){

        if(humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper'){
            humanScore++
            console.log(`You win! Your ${humanChoice} beats the computers ${computerChoice}.`) 
            console.log(`Your score is: ${humanScore}, computer score is: ${computerScore}.`);
        } else if(humanChoice === computerChoice){
            console.log(`You tied! You both picked ${humanChoice}.`)
            console.log(`Your scoe is: ${humanScore}, computer score is: ${computerScore}.`);
        } else{
            computerScore++
            console.log(`You lose! Computer's ${computerChoice} beats your ${humanChoice}.`);
            console.log(`Your score is: ${humanScore}, computer score is: ${computerScore}.`);
        }
    }  
    
}

playGame(5)
