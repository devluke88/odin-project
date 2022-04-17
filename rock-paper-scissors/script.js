function computerPlay(array) {
    return array[Math.floor(Math.random() * array.length)];
  };

function playRound(playerSelection, computerSelection) {
    const winner = `${playerSelection}, ${computerSelection}`;
    let result;
    let results;
    let roundResult = document.querySelector('.round-result');
    let finalResult = document.querySelector('.final-result');
    human_player = playerSelection.toLowerCase();
    computer_player = computerSelection.toLowerCase();
    
    if (human_player === computer_player ) {
        result = "Draw!";
    }
    else if (human_player === 'rock' && computer_player === 'paper') {
        result = "You Lose!";
        computerScore += 1
        computer.textContent = computerScore;
    }
    else if (human_player === 'rock' && computer_player === 'scissors') {
        result = "You Win!";
        humanScore += 1;
        human.textContent = humanScore;
    }
    else if (human_player === 'paper' && computer_player === 'rock') {
        result = "You Win!";
        humanScore += 1;
        human.textContent = humanScore;
    }
    else if (human_player === 'paper' && computer_player === 'scissors') {
        result = "You Lose!"
        computerScore += 1;
        computer.textContent = computerScore;
    }
    else if (human_player === 'scissors' && computer_player === 'rock') {
        result = "You Lose!"
        computerScore += 1;
        computer.textContent = computerScore;
    }
    else if (human_player === 'scissors' && computer_player === 'paper') {
        result = "You Win!"
        humanScore += 1;
        human.textContent = humanScore;
    }
    
    if (result === "Draw!") {
        results = `${result} ${playerSelection} and ${computerSelection}`;
    }
    else if (result === "You Win!") {
        results = `${result} ${playerSelection} beats ${computerSelection}`;
    }
    else {
        results = `${result} ${computerSelection} beats ${playerSelection}`;
    }
    if (humanScore === 5 || computerScore === 5) {
        userBtns.forEach(userBtn => {
            userBtn.disabled = true;
        });
        if (humanScore > computerScore) {
            finalResult.style = "color: green; text-align: center; font-size:  2em";
            finalResult.textContent = "You won!";

        }
        else {
            finalResult.style = "color: red; text-align: center; font-size: 2em";
            finalResult.textContent = "Game Over! You Lose!";
        }
        final.appendChild(btn);
    }
    roundResult.textContent = results;
    return results;
}; 

function reloadPage() {
    window.location.reload();
};

function clickHandler(e) {
    const playerSelection = e.target.innerHTML;
    let computerSelection = computerPlay(choice);
    console.log(playRound(playerSelection, computerSelection));
};

const computer = document.querySelector('.computer-score');
const human = document.querySelector('.human-score');
let computerScore = 0;
let humanScore = 0;
const choice = ["Rock", "Paper", "Scissors"];
let userBtns = document.querySelectorAll('.btn-game');
let computerSelection = computerPlay(choice);



userBtns.forEach(userBtn => {
    userBtn.addEventListener('click', clickHandler)
});

let btn = document.createElement("button");
btn.innerHTML = "Start Over?";
btn.className = "btn btn-primary";
const final = document.querySelector('.final');
final.addEventListener('click', reloadPage);