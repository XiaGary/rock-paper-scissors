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

let humanScore = 0;
let computerScore = 0;


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper"){
        humanScore += 1;
        results.textContent = `You win this round! Your score is ${humanScore}, computer's score is ${computerScore}.`
    } else if(humanChoice === computerChoice){
        results.textContent = `You tied this round! Your score is ${humanScore}, computer's score is ${computerScore}.`
    } else{
        computerScore += 1
        results.textContent = `You lose this round! Your score is ${humanScore}, computer's score is ${computerScore}.`
    }

    if(humanScore === 5){
        results.textContent = `You have won this match!`
    } else if(computerScore === 5){
        results.textContent = `You have lost this match!`
    }
}


    
    
    // if(humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper'){
    //     humanScore++
    //     console.log(`You win! Your ${humanChoice} beats the computers ${computerChoice}.`) 
    //     console.log(`Your score is: ${humanScore}, computer score is: ${computerScore}.`);
    // } else if(humanChoice === computerChoice){
    //     console.log(`You tied! You both picked ${humanChoice}.`)
    //     console.log(`Your scoe is: ${humanScore}, computer score is: ${computerScore}.`);
    // } else{
    //     computerScore++
    //     console.log(`You lose! Computer's ${computerChoice} beats your ${humanChoice}.`);
    //     console.log(`Your score is: ${humanScore}, computer score is: ${computerScore}.`);
    // }
    
    
    
    
    // for(let i = 1; i <= nTimes; i++){
    //     humanSelection = getHumanChoice();
    //     computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }