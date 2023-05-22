"use strict";
//INPUT
const myGuess = document.querySelector(".input-number");
//BUTTON
const checkBtn = document.querySelector(".check");
const homeBtn = document.querySelector(".home");
const againBtn = document.querySelector(".again");
//INFO
const displayInfo = document.querySelector(".info");
const score = document.querySelector(".score");
const displayHighscore = document.querySelector(".highscore");
// ?
const guessnumber = document.querySelector(".guess-number");

const homepage = document.querySelector(".homepage");
const startBtn = document.querySelector(".start-button");
const gamepage = document.querySelector(".gamepage");

class Guess {
  #highscore = 0;

  constructor() {
    this.randomGuess = Math.floor(Math.random() * 20 + 1);
    this.score = 20;
    this.start();
  }

  start() {
    startBtn.addEventListener(
      "click",
      function () {
        homepage.style.display = "none";
        gamepage.style.display = "block";
        this.game();
      }.bind(this)
    );
  }

  game() {
    console.log("You are inside check function");
    console.log(this.#highscore);
    console.log(this.randomGuess);
    checkBtn.addEventListener(
      "click",
      function (e) {
        const numberGuessed = Number(myGuess.value);
        console.log(this.randomGuess);

        this.display(numberGuessed);
        againBtn.addEventListener(
          "click",
          function () {
            this.score = 20;
            score.textContent = this.score;
            guessnumber.style.backgroundColor = "white";
            guessnumber.style.color = "#222222ff";
            displayInfo.textContent = "🎉 Start guessing...";
            guessnumber.textContent = "?";
            myGuess.value = "";
            this.randomGuess = Math.floor(Math.random() * 20 + 1);
          }.bind(this)
        );
      }.bind(this)
    );
    homeBtn.addEventListener("click", function () {
      homepage.style.display = "block";
      gamepage.style.display = "none";
    });
  }

  display(numberGuessed) {
    if (numberGuessed > this.randomGuess) {
      displayInfo.textContent = "📈 Too high!, try again";
      if (this.score > 0) this.score -= 1;
      score.textContent = this.score;
    } else if (numberGuessed < this.randomGuess) {
      displayInfo.textContent = "📉 Too low!, try again";
      if (this.score > 0) this.score -= 1;
      score.textContent = this.score;
    } else if (numberGuessed === this.randomGuess) {
      displayInfo.textContent = "🎉 Correct Number!";

      guessnumber.textContent = this.randomGuess;
      if (this.score > this.#highscore) this.#highscore = this.score;
      displayHighscore.textContent = this.#highscore;
      guessnumber.style.backgroundColor = "rgb(138, 43, 226,0.9)";
      guessnumber.style.color = "white";
      guessnumber.style.opacity;
    }
  }
}

const myguessGame = new Guess();
