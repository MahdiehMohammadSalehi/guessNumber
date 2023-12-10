'use strict';

const guessbtn = document.querySelector('.guessbtn');
const againbtn = document.querySelector('.againbtn');

let score = document.querySelector('.score').textContent;
let highScore = document.querySelector('.highscore');
let info = document.querySelector('.info-label');

//fuction to create a number between 1 to 20
const createRandomNumber = () => Math.trunc(Math.random() * 20) + 1;
let randomNumber = createRandomNumber();
console.log(Number(randomNumber), 'randomnum');

//function to view message
const message = function (msg, score) {
  info.textContent = msg;
  document.querySelector('.score').textContent = score;
};

//fuction to compare guess number by random number
const checkNumber = function () {
  const guessnumber = document.querySelector('.guessnumber').value;
  if (+score > 0) {
    //empty value:
    if (!guessnumber) {
      message('🔔Please enter a number', score);
    } else {
      score -= 1;
      //equal case:
      if (randomNumber === +guessnumber) {
        if (Number(highScore.textContent) < score)
          highScore.textContent = score;
        message('🎉Correct Number!', score);
        document.body.style.backgroundColor = 'green';
        document.querySelector('.square').textContent = randomNumber;
      } else {
        randomNumber > +guessnumber
          ? message('🤏Too low!', score)
          : message('👆Too high!', score);
      }
    }
  } else message('💣 You Losed The Game', score);
};

//again button pressed function:
const againfunc = function () {
  randomNumber = createRandomNumber();
  console.log(Number(randomNumber), 'this randomnum');
  document.querySelector('.guessnumber').value = '';
  message('Start guessing...', 0);
  document.body.style.backgroundColor = 'black';
  document.querySelector('.square').textContent = '?';
};
guessbtn.addEventListener('click', checkNumber);
againbtn.addEventListener('click', againfunc);
