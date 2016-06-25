
var cards = ["queen", "queen", "king", "king"];
var cardsInplay = [];

/*var cardOne = "King";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "Queen";


var userChoice = function(a,b){
if (a === b) {
	alert("You found a match!");
} else { alert("Sorry, try again.");
}
};
console.log(userChoice(cardOne, cardTwo));*/


var board = document.getElementById('game-board');

function createBoard() {

   	for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    board.appendChild(cardElement);
    cardElement.addEventListener('click', isTwoCards);
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }
};

function isTwoCards() {
 
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
  	if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
};


function isMatch(cards) {
 
  	if (cards[0] === cards[1] || cards[2] === cards[3] ) {
      alert("You found a match!");
  	} else {
      alert("Sorry, try again.");
	}
};

createBoard();