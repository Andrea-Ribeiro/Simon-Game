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

  checkAnswer(userClickedPattern.length-1);
})

$(document).keypress(function(){
  if(!started){
    started = true;
    nextSequence();
  }
})

function startOver(){
  started = false;
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if(gamePattern.length === userClickedPattern.length){
      setTimeout(nextSequence, 500);
      userClickedPattern = [];
    }
  }else{
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}
