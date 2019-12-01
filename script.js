var canvas = document.querySelector(".game");
// - Game is e.g. class id from html
canvas.width = 700;
canvas.height = 500;
var ctx = canvas.getContext("2d");


// all figures/objects will go in the state

var state = {
  girl: {
    walking: false,
  },
  light: {
    bright: false,
    create: lights(),
    x: 1000,
    speed:0,
  },
  crowd: {
    armsUp: false,
  },
  spacebar: false,
  }

function flipStateGirl() {
  if(state.girl.walking === false) {
    state.girl.walking = true;
}
    else if (state.girl.walking === true) {
      state.girl.walking = false;
    }
}

function flipStateLight() {
  if(state.light.bright === false) {
    state.light.bright = true;
}
    else if (state.light.bright === true) {
      state.light.bright = false;
    }
}

function flipStateCrowd() {
  if(state.crowd.armsUp === false) {
    state.crowd.armsUp = true;
}
    else if (state.crowd.armsUp === true) {
      state.crowd.armsUp = false;
    }
}

setInterval(flipStateGirl,500);
setInterval(flipStateLight,50);
setInterval(flipStateCrowd,100);

function animateCanvas() {
  clearCanvas();
  animateGirl();
  flickerLight();
  animateCrowd();
  moveLight();

}

function animateGirl() {
  if (state.girl.walking === true) {
    drawGirlWalk();
  }
  else {
    drawGirlStill();
  }
}

function flickerLight() {
  if (state.light.bright === true) {
        drawLightBright();
  }
  else {
    drawLightDim();
  }
}

function animateCrowd() {
  if (state.crowd.armsUp === true) {
        drawCrowdArmsUp();
  }
  else {
    drawCrowdArmsDown();
  }
}

var control = setInterval(animateCanvas,30);

function pauseGame() {
  var stateGame = "Paused";
  console.log(stateGame);
  clearInterval(control);
}

function drawGirlStill() {
    var girlStill = new Image();
    girlStill.src = "girl-static-2.png";
    girlStill.onload = function() {
    ctx.drawImage(girlStill,0,0,400,400);
  }
}

function drawGirlWalk() {
    var girlWalk = new Image();
    girlWalk.src = "girl-walking-2.png";
    girlWalk.onload = function() {
    ctx.drawImage(girlWalk,0,0,400,400);
  }
}


function drawLightBright() {
    var lightBright = new Image();
    lightBright.src = "light-bright.png";
    lightBright.onload = function() {
    ctx.drawImage(lightBright,state.light.x,0,200,200);
  }
}

function drawLightDim() {
    var lightDim = new Image();
    lightDim.src = "light-dim.png";
    lightDim.onload = function() {
    ctx.drawImage(lightDim,state.light.x,0,200,200);
  }
}


function drawCrowdArmsUp() {
    var armsUp = new Image();
    armsUp.src = "crowd2.png";
    armsUp.onload = function() {
    ctx.drawImage(armsUp,400,190,290,300);
  }
}


function drawCrowdArmsDown() {
    var armsDown = new Image();
    armsDown.src = "crowd1.png";
    armsDown.onload = function() {
    ctx.drawImage(armsDown,400,190,290,300);
  }
}

//Functions

function movingGirl(){
  drawGirlStill();
  drawGirlWalk();
};

function lights(){
  drawLightBright();
  drawLightDim();
};

function people(){
  drawCrowdArmsUp();
  drawCrowdArmsDown();
};


//Move things around

function moveLight(e){
  state.light.x  = state.light.x - 100;
}

// var animate = {
//   if
//   (movingGirl() == true){
//     state.light.x = state.light.x - 100;
//   } else (movingGirl() == false);{
//     state.light.x = 500;
//   }
// }
//


// clear the canvas by redrawing the background each frame
function clearCanvas() {
  drawBackground();
}


function drawBackground() {
  var background = new Image();
  background.src = "bg.jpg";
  background.onload = function() {
  ctx.drawImage(background,0,0,700,500)};
}





//
// var buttons = document.getElementById("body");
//
//
// function upKeyDown(e) {
//   if (e.keyCode === 38) {
//     state.upPressed = true;
//   }
// }
// buttons.addEventListener("keypress", myScript);
//
//
// function upKeyUp(e) {
//   if (e.keyCode === 38) {
//     state.upPressed = false;
//   }
// }
// buttons.addEventListener("keyup", upKeyUp);
//
// function downKeyDown(e) {
//   if (e.keyCode === 40) {
//     state.downPressed = true;
//   }
// }
// buttons.addEventListener("keydown", downKeyDown);
//
// function downKeyUp(e) {
//   if (e.keyCode === 40) {
//     state.downPressed = false;
//   }
// }
// buttons.addEventListener("keyup", downKeyUp);
//
// function leftKeyDown(e) {
//   if (e.keyCode === 37) {
//     state.leftPressed = true;
//   }
// }
// buttons.addEventListener("keydown", leftKeyDown);
//
//   function leftKeyUp(e) {
//     if (e.keyCode === 37) {
//       state.leftPressed = false;
//     }
//   }
//   buttons.addEventListener("keyup", leftKeyUp);
//
// function rightKeyDown(e) {
//   if (e.keyCode === 39) {
//     state.rightPressed = true;
//   }
// }
// buttons.addEventListener("keydown", rightKeyDown);
//
// function rightKeyUp(e) {
//   if (e.keyCode === 39) {
//     state.rightPressed = false;
//   }
// }
// buttons.addEventListener("keyup", rightKeyUp);


// var coin1 = {
//   size: 20,
//   x: Math.floor(Math.random()*(3*canvas.width/10))+(canvas.width/10),
//   y: Math.floor(Math.random()*(3*canvas.height/10))+(canvas.height/10),
//   question1:"One of your online friends is",
//   question2: "going to help you with your",
//   question3: "homework, but has asked for",
//   question4: "your password.",
//   question5: "Should you give it to them?",
//   correctAnswer: state.buttons[1]
