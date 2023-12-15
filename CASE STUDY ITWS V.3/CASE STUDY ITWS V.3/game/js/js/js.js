let cardGroup = ["🤩", "😂", "👹", "🌈", "🍅", "🦄", "🤖", "🥲"];
let totalCards = cardGroup.concat(cardGroup);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function distributeCard() {
  shuffle(totalCards);
  let table = document.querySelector("#table");
  table.innerHTML = " ";

  totalCards.forEach(function (element, index) {
    let card = document.createElement("div");
    card.setAttribute("data-index", index);
    card.innerHTML =
      "<div class='card'>" +
      "<div class='card_content'>" + element +
      "</div>" + " </div>";

    table.appendChild(card);
  });
}

let flippedCards = [];

function discover() {
  this.classList.add("discovered");
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    if (flippedCards[0].querySelector('.card_content').innerHTML === flippedCards[1].querySelector('.card_content').innerHTML) {
      setTimeout(function () {
        flippedCards.forEach(function (card) {
          card.style.opacity = 0;
          card.addEventListener("transitionend", function () {
            card.remove();
          }, { once: true });
        });
        flippedCards = [];
      }, 1000);
    } else {
      setTimeout(function () {
        flippedCards.forEach(function (card) {
          card.classList.remove("discovered");
        });
        flippedCards = [];
      }, 1000);
    }
  }
}

distributeCard();

document.querySelectorAll(".card").forEach(function (element) {
  element.addEventListener("click", discover);
});
