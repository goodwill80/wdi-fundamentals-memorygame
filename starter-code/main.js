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

document.getElementById("board").id = "game-board";

var board = document.getElementById('game-board');

function createBoard() {
  
  for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    board.appendChild(cardElement);
  }

};

