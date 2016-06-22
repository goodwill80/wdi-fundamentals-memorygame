var cardOne = "King";
var cardTwo = "Queen";
var cardThree = "King";
var cardFour = "Queen";


var userChoice = function(a,b){
if (a === b) {
	alert("You found a match!");
} else { alert("Sorry, try again.");
}
};

console.log(userChoice(cardOne, cardTwo));