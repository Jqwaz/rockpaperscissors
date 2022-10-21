print('hello world')
console.log('hello test')

function getComputerChoice(){ 

    choice = Math.floor(Math.random() * 4);
    if(choice===1){
        return ('rock')
    }
    else if(choice===2){
        return ('paper')
    }
    else return ('scissors')

}

function playRound(playerSelection,computerSelection){ 

    if(computerSelection==='rock' && playerSelection==='scissors'){ 
        return ('You Lose');
    }
    else if (computerSelection ==='paper' && playerSelection === 'rock'){
        return ('You Lose'); 
    }
    else if (computerSelection ==='scissors' && playerSelection === 'paper'){
        return ('You Lose'); 
    }
    else if (computerSelection === playerSelection){
        return ('Its a Tie!'); 
    }
    else if (playerSelection!='rock'||playerSelection!='paper'||playerSelection!='scissors'){
        return ('Mispelled. You Lose');
    }
    else {return ('You win!')}
    
}


function game(){
    for (let i = 0; i < 5; i++){
        console.log(i);
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("rock, paper, or scissors").toLowerCase();
        console.log(playerSelection);
        console.log(playRound(playerSelection,computerSelection));
        console.log(computerSelection);
        
        
    }
}

game(); 

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));
