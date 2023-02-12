// prompt for a userGuess
function getUserGuess() {
  let userGuess;
  do {
    userGuess = prompt(
      'Please submit a valid guess by either writing rock, paper, or scissors: '
    ).toLowerCase();
  } while (
    userGuess != 'rock' &&
    userGuess != 'scissors' &&
    userGuess != 'paper'
  );
  return userGuess;
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
  let message = `You have ${playerGuess} and the computer has ${computerGuess}.\n`;
  if (playerGuess === computerGuess) {
    gameWinner = -1;
    message += `You tie because you both guessed the same thing!`;
  } else if (
    (playerGuess === 'rock' && computerGuess === 'scissors') ||
    (playerGuess === 'paper' && computerGuess === 'rock') ||
    (playerGuess === 'scissors' && computerGuess === 'paper')
  ) {
    gameWinner = 1;
    message += `This means that you win this round!`;
  } else {
    gameWinner = 0;
    message += `You lose this round!`;
  }
  return message;
}

function calcWinner(userWins, computerWins) {
  if (userWins > computerWins) return 'You have won this combative duel!';
  else if (userWins === computerWins) return 'You have tied with the computer!';
  else return 'Unfortunately, you have lost!';
}
// TEST CASES for playRound
// console.log(playRound(getUserGuess(), getComputerGuess()));
// console.log(playRound('rock', 'paper'));
// console.log(playRound('rock', 'rock'));
// console.log(playRound('rock', 'scissors'));

// console.log(playRound('paper', 'paper'));
// console.log(playRound('paper', 'rock'));
// console.log(playRound('paper', 'scissors'));

// console.log(playRound('scissors', 'paper'));
// console.log(playRound('scissors', 'rock'));
// console.log(playRound('scissors', 'scissors'));

// play a game of five rounds.
function playGame() {
  //will be used for every round to decide who turns out to be the winner.
  //   value = 1 --> user wins || 0 --> computer wins || -1 -->a tie.
  let userWins = 0;
  let computerWins = 0;
  let ties = 0;
  alert(
    'Welcome to this rock, paper, scissors game!' +
      ' It is a very simple and nice game that you can play to spend some time away from the computer. It consists of 5 rounds after which a winner will be announced.'
  );
  //   playing 5 rounds.
  for (let i = 1; i <= 5; i++) {
    alert(
      'This is the ' +
        i +
        'th round.\n' +
        playRound(getUserGuess(), getComputerGuess())
    );
    if (gameWinner === 1) userWins++;
    else if (gameWinner === 0) computerWins++;
    else ties++;
    // for debug:
    console.log(gameWinner);
    console.log(userWins);
    console.log(computerWins);
  }
  alert('The battle is over! Check the console to see who has won!');
  console.log(calcWinner(userWins, computerWins));
}
let gameWinner;
playGame();
