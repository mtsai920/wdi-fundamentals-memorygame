const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

let cardOne = cards[2];
let cardTwo = cards[0];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log(cardsInPlay);

if (cardsInPlay.length === 2) {
	cardsInPlay[0] === cardsInPlay[1];
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

console.log("User flipped " + cardTwo);