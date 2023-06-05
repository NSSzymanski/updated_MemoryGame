const startGame = document.getElementById("start-btn");

let counter = 0;

function start() {
  setInterval(function () {
    counter++;
    if (counter <= 100) {
      span = document.getElementById("countdown");
      span.innerHTML = counter;
    }
    if (counter === 100) {
      alert("Game over! Sorry slow-poke, better luck next time");
      clearInterval(counter);
    }
    if (matches === 6) {
      alert("You matched them all! It took you " + counter + " seconds");
    }
  }, 1000);
}

const instructionsButton = document.getElementById("instructions");
const instructionsDialog = document.getElementById("instructions-dialog");

instructionsButton.addEventListener("click", () => {
  instructionsDialog.showModal();
});

const cards = document.querySelectorAll(".card");

let cardWasFlipped = false;
let cardOne, cardTwo;
let matches = 0;

function flipTheCard() {
  this.classList.toggle("flip");

  if (!cardWasFlipped) {
    cardWasFlipped = true;
    cardOne = this;
  } else {
    cardWasFlipped = false;
    cardTwo = this;

    if (cardOne.dataset.name === cardTwo.dataset.name) {
      cardOne.removeEventListener("click", flipTheCard);
      cardTwo.removeEventListener("click", flipTheCard);
      cardOne.style.opacity = "0";
      cardTwo.style.opacity = "0";
      matches++;
      console.log(matches);
    } else {
      setTimeout(() => {
        cardOne.classList.remove("flip");
        cardTwo.classList.remove("flip");
      }, 1200);
    }
  }
}

startGame.addEventListener("click", () => {
  cards.forEach((card) => card.addEventListener("click", flipTheCard));
});

function randomize() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
}

randomize();

const resetBoard = document.getElementById("reset");

resetBoard.addEventListener("click", () => {
  window.location.reload();
});
