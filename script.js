function start() {
  let counter = 30;
  setInterval(function () {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("countdown");
      span.innerHTML = counter;
    }
    if (counter === 0) {
      alert("Time's Up");
      clearInterval(counter);
    }
  }, 1000);
  //insert code on allowing came to be initiated here
}

const instructionsButton = document.getElementById("instructions");
const instructionsDialog = document.getElementById("instructions-dialog");

instructionsButton.addEventListener("click", () => {
  instructionsDialog.showModal();
});
// make cards, flip them, randomize them

// let frontOfCard = () => [
//   { value: "1", image: "./images.judgement.jpg" },
//   { value: "1", image: "./images.judgement.jpg" },
//   { value: "2", image: "./images.the-empress.jpg" },
//   { value: "2", image: "./images.the-empress.jpg" },
//   { value: "3", image: "./images.the-high-priestess.jpg" },
//   { value: "3", image: "./images.the-high-priestess.jpg" },
//   { value: "4", image: "./images.the-moon.jpg" },
//   { value: "4", image: "./images.the-moon.jpg" },
//   { value: "5", image: "./images.the-sun.jpg" },
//   { value: "4", image: "./images.the-sun.jpg" },
//   { value: "6", image: "./images.the-star.jpg" },
//   { value: "4", image: "./images.the-star.jpg" },
// ];

// let showFront = document.getElementsByClassName("front-face");
// showFront.addEventListener("click", () => {
// })
// //function handleCardClick(card) {
//   //  if (shouldMoveCardOff(card)) {
//     //    MoveCardOff(card);
//}
//}

//function shouldMoveCardOff(card) {
// if pair match card if found return true otherwise false
//}

//function MoveCardOff(card) {
// add hid class to the card
//  card.classList.add('hide');
//}

const cards = document.querySelectorAll(".card");

let cardWasFlipped = false;
let cardOne, cardTwo;

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
    } else {
      setTimeout(() => {
        cardOne.classList.remove("flip");
        cardTwo.classList.remove("flip");
      }, 1200);
    }
  }
}

cards.forEach((card) => card.addEventListener("click", flipTheCard));

function randomize() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
}

randomize();
