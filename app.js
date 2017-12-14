//Game values
let min = 1, max = 10, winning = Math.floor(Math.random() * (max - min)) + min, guessesLeft = 3;

//UI element
const game = document.querySelector('#game'), minNum = document.querySelector('.min-num'), maxNum = document.querySelector('.max-num'), guessBtn = document.querySelector('#guess-btn'), guessInput = document.querySelector('#guess-input'), message = document.querySelector('#message'), playAgain = document.querySelector('.play-again');

//Assign UI Min and Max
minNum.innerHTML = min;
maxNum.innerHTML = max;

//PlayAgainListener
game.addEventListener('mousedown',(e) => {
  if(e.target.className === 'play-again'){window.location.reload();}
})

//Getting Number and Matching
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max)
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  else

  //Check if Match
  if(guess === winning){
    gameOver(`Congrats! The winning number is ${winning}`, 'green');
  }else{
    //Give the amount of chances left
    guessesLeft -= 1;
    if(guessesLeft === 0){
      gameOver(`Sorry, you've lost! The number was ${winning}`, 'red');
    }else{
      //Change Border
      guessInput.style.borderColor = 'red';
      //Winning Message
      setMessage(`Wrong answer! You only have ${guessesLeft} left`, 'red');
      //Clear Input
      guessInput.value = '';
    }

  }
})

//SetMessage Function
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

//Game over
function gameOver(msg, color){
  //Disable Input
  guessInput.disabled = true;
  //Change Border
  guessInput.style.borderColor = color;
  //Winning Message
  setMessage(msg, color);
  //Reset
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}