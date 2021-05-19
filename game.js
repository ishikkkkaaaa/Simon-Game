var gamePatter = [];

//array of colors?
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 4;
  randomNumber = Math.floor(randomNumber);
}

//we chose random number from randomnumber and color from buttonColors
var randomChosenColours=buttonColours[randomNumber];

//for the game pattern,we push new chosen random color
gamePattern.push(randomChosenColours);