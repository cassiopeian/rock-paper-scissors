// 1. Write a detailed pseudocode for this game
// 2. Follow your pseudocode line by line (or in an order that makes sense)
// 3. Can't remember a method/function, Google it. Ask out loud. You got this :)

// Tip: Method for getting a random number: Math.floor(Math.random() * {maxNum});

// _________________________________________________________________
// rock beats scissors, rock and rock tie
// scissors beats paper, scissors and scissors tie 
// paper beats rock, paper and paper tie


// the scoreboard will read "0 YOU - 0 BOT" at the beginning. 
// if i click on the rock button and the bot selects rock, we will draw and both gain a point
//   else, if i click on rock and the bot selects paper, i will lose and the bot will gain a point
//   else, if i click on rock and the bot selects scissors, i will win and gain a point


// if i click on the paper button, i will either win, lose, or draw with the bot, depending on the choice it makes.
// if i click on the scissors button, i will either win, lose, or draw with the bot, depending on the choice it makes. 
// the choices and score will be updated below. the winner of each round will have their score increase by 1.
// i can also choose the "start over" button at any time to clear the scoreboard. 



let choices = ['rock', 'paper', 'scissors'];
let randomChoiceIndex;
let computerChoice;
let userScore = 0;
let computerScore = 0;
let userChoice;

$('#rock').on('click', function(){
  randomChoiceIndex = Math.floor(Math.random() * choices.length);
  userChoice = 'rock';
  computerChoice = choices[randomChoiceIndex];
  if (userChoice === 'rock' && computerChoice === 'rock') {
    userScore = userScore + 1;
    computerScore = computerScore + 1;
    $('#humanScore').text(userScore);
    $('#computerScore').text(computerScore); 
    $('#status').text('You chose rock. Computer chose rock. YOU DRAW.');
  }
  else if (userChoice === 'rock' && computerChoice === 'paper') {
    computerScore = computerScore + 1;
    $('#humanScore').text(userScore);
    $('#computerScore').text(computerScore); 
    $('#status').text('You chose rock. Computer chose paper. COMPUTER WINS!');
  }
  else if (userChoice === 'rock' && computerChoice === 'scissors') {
    userScore = userScore + 1;
    $('#humanScore').text(userScore);
    $('#computerScore').text(computerScore); 
    $('#status').text('You chose rock. Computer chose scissors. YOU WIN!');
  }
});

$('#paper').on('click', function(){
  randomChoiceIndex = Math.floor(Math.random() * choices.length);
  userChoice = 'paper';
  computerChoice = choices[randomChoiceIndex];
  if (userChoice === 'paper' && computerChoice === 'paper') {
    userScore = userScore + 1;
    computerScore = computerScore + 1;
    $('#humanScore').text(userScore);
    $('#computerScore').text(computerScore);
    $('#status').text('You chose paper. Computer chose paper. YOU DRAW.');
  }
  else if (userChoice === 'paper' && computerChoice === 'scissors') {
    computerScore = computerScore + 1;
    $('#humanScore').text(userScore);
    $('#computerScore').text(computerScore); 
    $('#status').text('You chose paper. Computer chose scissors. COMPUTER WINS!');
  }
  else if (userChoice === 'paper' && computerChoice === 'rock') {
    userScore = userScore + 1;
    $('#humanScore').text(userScore);
    $('#computerScore').text(computerScore); 
    $('#status').text('You chose paper. Computer chose rock. YOU WIN!');
  }
});

$('#scissors').on('click', function(){
  randomChoiceIndex = Math.floor(Math.random() * choices.length);
  userChoice = 'scissors';
  computerChoice = choices[randomChoiceIndex];
  if (userChoice === 'scissors' && computerChoice === 'scissors') {
    userScore = userScore + 1;
    computerScore = computerScore + 1;
    $('#humanScore').text(userScore);
    $('#computerScore').text(computerScore);
    $('#status').text('You chose scissors. Computer chose scissors. YOU DRAW.');
  }
  else if (userChoice === 'scissors' && computerChoice === 'rock') {
    computerScore = computerScore + 1;
    $('#humanScore').text(userScore);
    $('#computerScore').text(computerScore);
    $('#status').text('You chose scissors. Computer chose rock. COMPUTER WINS!');
  }
  else if (userChoice === 'scissors' && computerChoice === 'paper') {
    userScore = userScore + 1;
    $('#humanScore').text(userScore);
    $('#computerScore').text(computerScore);
    $('#status').text('You chose scissors. Computer chose paper. YOU WIN!');
  }
});

$('#reset').on('click', function(){
  userScore = userScore * 0;
  computerScore = computerScore * 0;
  $('#humanScore').text(userScore);
  $('#computerScore').text(computerScore);
  $('#status').text('');
});

