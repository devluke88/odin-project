function computerPlay(array) {
    return array[Math.floor(Math.random() * array.length)];
  };

function playRound(playerSelection, computerSelection) {
    const winner = `${playerSelection}, ${computerSelection}`;
    let result;
    let results;
    human_player = playerSelection.toLowerCase();
    computer_player = computerSelection.toLowerCase();
    if (human_player === computerSelection ) {
        result = "Draw!"
    }
    else if (human_player === 'rock' && computer_player === 'paper') {
        result = "You Lose!"
    }
    else if (human_player === 'rock' && computer_player === 'scissors') {
        result = "You Win!"
    }
    else if (human_player === 'paper' && computer_player === 'rock') {
        result = "You Win!"
    }
    else if (human_player === 'paper' && computer_player === 'scissors') {
        result = "You Lose!"
    }
    else if (human_player === 'scissors' && computer_player === 'rock') {
        result = "You Lose!"
    }
    else if (human_player === 'scissors' && computer_player === 'paper') {
        result = "You Win!"
    }
    else {
        if (["rock", "paper", "scissors"].indexOf(human_player) === -1) {
            return `You've enter incorrect name ${human_player} - try again!`
        }
    }
    if (result === "Draw!") {
        results = `${result} ${playerSelection} and ${computerSelection}`
    }
    else if (result === "You Win!") {
        results = `${result} ${playerSelection} beats ${computerSelection}`
    }
    else {
        results = `${result} ${computerSelection} beats ${playerSelection}`
    }
    
    return results;
}; 
const choice = ["rock", "paper", "scissors"];
let userBtns = document.querySelectorAll('button');

let computerSelection = computerPlay(choice);

function clickHandler(e) {
    const playerSelection = e.target.innerHTML;
    let computerSelection = computerPlay(choice);
    console.log(playRound(playerSelection, computerSelection));
}
userBtns.forEach(userBtn => {
    userBtn.addEventListener('click', clickHandler)
});
