const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = [];

function checkForMatch() {
	this.setAttribute(src);
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
};

function flipCard() {
	this.getAttribute('data-id', cardId);
	console.log("User flipped " + cards[cardsId].rank);
	checkForMatch();
	if (cardsInPlay.length === 2) {
	cardsInPlay[0] === cardsInPlay[1];
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
};

cardsInPlay.push(cards[cardId].rank);

console.log(cards.cardImage);
console.log(flipCard.suit);

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createNewElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		cardElement.appendchild('game-board');
	}
};


createBoard();