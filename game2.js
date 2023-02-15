// prompt for a userGuess
function getUserGuess(event) {
  return event.target.outerText.toLowerCase();
}

// generate a computer guess
function getComputerGuess() {
  choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'paper';
      break;
  }
}

// plays a round --> display a message of who has won.
function playRound(playerGuess, computerGuess) {
  // -1 for a tie, 0 for a loss, 1 for a win
  message = `You have ${playerGuess} and the computer has ${computerGuess}.\n`;
  if (playerGuess === computerGuess) {
    return -1;
  } else if (
    (playerGuess === 'rock' && computerGuess === 'scissors') ||
    (playerGuess === 'paper' && computerGuess === 'rock') ||
    (playerGuess === 'scissors' && computerGuess === 'paper')
  ) {
    return 1;
  } else {
    return 0;
  }
}

//determines the winner of the round.
function calcRoundWinner(message) {
  if (message.includes('You lose this round!')) return true;
  else if (message.includes('you win this round!')) return false;
  else return none;
}

function addPointToWinner(roundResult) {
  if (roundResult === 1) {
    return userCount++;
  } else if (roundResult === 0) {
    return computerCount++;
  } else {
    return ties++;
  }
}

//FROM PREVIOUS PROGRAM
// function showResultMessage(roundResult) {
//   if (roundResult === 1) return 'You win have this Round! Well done.';
//   else if (roundResult === 0) return 'Unfortunately, you lost this round...';
//   else {
//     return 'it is a tie! So no one receives a point here.';
//   }
//}

// MAIN PROGRAM
let computerCount = 0;
let userCount = 0;
let ties = 0;
let userGuess;
let roundCounter = 0;
const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');
const messageDisplay = document.createElement('div');
const display = document.querySelector('.display');
const header = document.querySelector('.header');
// const header = display.children[0]; //not queryselector used.. found another method.
const buttons = document.querySelectorAll('.select-btn');
buttons.forEach((button) =>
  button.addEventListener('click', (e) => {
    userWin = playRound(getUserGuess(e), getComputerGuess()); //returns -1, 0 or 1 depending on result
    addPointToWinner(userWin);
    // update score
    userScore.textContent = userCount;
    computerScore.textContent = computerCount;
    //result message
    messageDisplay.textContent = showResultMessage(userWin);
    display.appendChild(messageDisplay);
    display.classList.add('result-message');
    //show round
    roundCounter++;
    header.innerText = roundCounter;
  })
);
