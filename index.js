//--------------------- CREATE ANIMATION ---------------------//

var birdy           = document.getElementById('birdy');
var sprite          = document.getElementById('sprite');
var spriteStepWidth = 92;
var spriteSteps     = 2;
var step            = 0;
var up              = false;

function setEvents () {

  document.onkeydown = function (e) {
    if ( e.keyCode == 32 ) {
      up = true;
    }
  }

  document.onkeyup = function (e) {
    if ( e.keyCode == 32 ) {
      up = false;
    }
  }

}

// step = 2
function animateSprite () {

  // '-' + (2 * 92) + 'px' -> -184px
  sprite.style.left= '-' + step * spriteStepWidth + 'px';

  // if ( 2 == 2 )
  if (step == spriteSteps) {
    step = 0;
  }

  else {
    // step = 2;
    step++;
  }

}

function animateFly () {

  var fall = birdy.offsetTop;

  if (up == true) {
    birdy.style.top = (fall - 20) + 'px';
  }

  else {
    birdy.style.top = (fall + 12) + 'px';
  }

}

function animateScene () {
  animateSprite();
  animateFly();
}

//-----------------------------------------------------------
// LAUNCH SCENE
//-----------------------------------------------------------

setEvents();
var animationInstance = window.setInterval(animateScene, 80);
