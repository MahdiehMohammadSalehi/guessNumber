const enteredNumberValue =
  document.getElementsByClassName("enterednumbervalue");
const checkBtn = document.getElementById("checkbtn");
let score = document.getElementById("score").textContent;
let highScore = document.getElementById("highscore");
let info = document.getElementById("info");
let tryNumber = 0;
// const createRandomNumber = function () {
//   let randomNumber = Math.random() * (20 - 1) + 1;
//   return randomNumber;
// };
const createRandomNumber = () => Math.random() * (20 - 1) + 1;

const checkNumber = function () {
  while (+score > 0) {
    tryNumber += 1;
    // const randomNumber = createRandomNumber();
    console.log(randomNumber);
    //too low:
    if (randomNumber > enteredNumberValue) {
      info = "Too low!";
      score -= score;
    }
    //equal
    else if (randomNumber === enteredNumberValue) {
      info = "Correct Number!";
      highScore = 20 - tryNumber;
      document.body.style.backgroundColor = "green";
    }
    //too high
    else if (randomNumber < enteredNumberValue) {
      info = "Too high!";
      score -= score;
    }
  }
};

checkBtn.addEventListener("click", checkNumber);
