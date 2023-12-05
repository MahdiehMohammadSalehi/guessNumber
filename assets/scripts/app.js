'use strict'
// const enteredNumberValue =
//   document.querySelector(".enterednumbervalue").textContent;
const checkBtn = document.getElementById("checkbtn");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let info = document.getElementById("info");
let tryNumber = 0;
let totaltry = 20;
// const createRandomNumber = function () {
//   let randomNumber = Math.random() * (20 - 1) + 1;
//   return randomNumber;
// };
const createRandomNumber = () => Math.trunc(Math.random() * 20) + 1;
const randomNumber = createRandomNumber();
console.log(Number(randomNumber), 'randomnum');

const checkNumber = function () {
  if (totaltry > 0) {

    const enteredNumberValue =
      document.querySelector(".enterednumbervalue").value;
    if (!enteredNumberValue) alert("enter a number")
    else {
      console.log(+enteredNumberValue, 'entered');
      //too low:
      if (randomNumber > +enteredNumberValue) {
        info.textContent = "🤏Too low!";
        console.log(totaltry, 'totaltry');
        score.textContent = totaltry - 1;
        totaltry -= 1;
      }
      //equal
      else if (randomNumber === +enteredNumberValue) {
        info.textContent = "🎉Correct Number!";
        highScore.textContent = 20 - tryNumber;
        document.body.style.backgroundColor = "green";
        // document.querySelector('enterednumbervalue').style.backgroundColor = "green";
        document.querySelector('.square').textContent = randomNumber;
      }
      //too high
      else if (randomNumber < +enteredNumberValue) {
        info.textContent = "👆Too high!";
        score.textContent = totaltry - 1;
        totaltry -= 1;
      }
      tryNumber += 1;
    }
  }
  else
    alert("your choices finished")
};

checkBtn.addEventListener("click", checkNumber);
