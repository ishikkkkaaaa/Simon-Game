var gamePatter = [];
var userClickedPattern = [];
//array of colors?
var buttonColours = ["red", "blue", "green", "yellow"];

$(".btn").click(function () {
  //store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");
  //adding chosen color to new clicked pattern
  userClickedPattern.push(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  //we chose random number from randomnumber and color from buttonColors
  var randomChosenColour = buttonColours[randomNumber];

  //for the game pattern,we push new chosen random color
  gamePattern.push(randomChosenColour);

  //selecting the button w same ID using jQuery
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  //adding audio
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
