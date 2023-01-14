var hole = document.getElementById("hole");
var game = document.getElementById("game");
var result = document.getElementById("result");
var text = document.getElementById("text");
var song = document.getElementById("song");
var score = 0;
var jumping = 0;

hole.addEventListener("animationiteration", RanHole);

function songplay() {
  song.play();
}
songplay();

function RanHole() {
  var random = Math.floor(Math.random() * (500 - 150 + 1)) - 500;
  hole.style.top = random + "px";
  score++;
}

var fall = setInterval(function () {
  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

  console.log(birdTop);

  var speed = 2 + score * 0.1;

  if (jumping == 0) {
    bird.style.top = birdTop + speed + "px";
  }

  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));

  var hTop = 500 + holeTop;

  if (
    birdTop > 450 ||
    (blockLeft < 50 &&
      blockLeft > -50 &&
      (birdTop < hTop || birdTop > hTop + 120))
  ) {
    result.style.display = "block";
    text.innerText = `Your Final score is : ${score}`;
    game.style.display = "none";
  }
}, 10);

function hop() {
  jumping = 1;

  var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

  if (birdTop > 6) {
    bird.style.top = birdTop - 60 + "px";
  } else {
    bird.style.top = 0;
  }

  setTimeout(function () {
    jumping = 0;
  }, 100);
}

window.addEventListener("keydown", hop);

var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
  $("#iframeAudio").remove();
} else {
  $("#playAudio").remove(); // just to make sure that it will not have 2x audio in the background
}
