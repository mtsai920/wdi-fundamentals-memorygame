const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
};

function flipCard(cardsId) {
	console.log("User flipped " + cards[cardsId]);
	checkForMatch();
	if (cardsInPlay.length === 2) {
	cardsInPlay[0] === cardsInPlay[1];
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
};

cards[cardsID].push(cardsInPlay);

flipCard(2);

