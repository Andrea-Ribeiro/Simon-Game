var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false

var buttonColours = ["red", "blue", "green", "yellow"];

function playSound(name){
  var audio = new Audio((`./sounds/${name}.mp3`))
  audio.play();
}

function animatePress(currentColour){
  $(`#${currentColour}`).fadeToggle(100).fadeIn(100);
}

function nextSequence(){
  level++;
  $("h1").text(`Level ${level}`);
  randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  animatePress(randomChosenColour);
  playSound(randomChosenColour);
}

$(".btn").click(function(){
  var userChosenColour = this.id
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

})

$(document).keypress(function(){
  if(!started){
    started = true;
    nextSequence();
  }
})
