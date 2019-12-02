var canvas = document.querySelector(".game");
// - Game is e.g. class id from html
canvas.width = 700;
canvas.height = 450;
var ctx = canvas.getContext("2d");


// all figures/objects will go in the state

var state = {
  gameMode: {
    paused: false,
    info: false,
  },
  girl: {
    walking: false,
    x: 0,
    y: 30,
  },
  trex: {
    x: 400,
    speed:0,
  },
  light: {
    bright: false,
    create: lights(),
    x: 1000,
    speed:0,
  },
  steg: {
    x: 1300,
    speed:0,
  },
  crowd: {
    armsUp: false,
    appear: people(),
    x: 1800,
    speed:0,
    height:350,
    width:350,
  },
  sign: {
    x: 2300,
    speed:0,
  },
  spacebar: false,
// popUp nested objects
  popUp: {
    lights: {
      x: 400,
      y: 50,
      bullet1:"Autistic people can experience sensory overload",
      bullet2:"Distractions like flickering lights can be unbearable",
      bullet3:"Ensure your public space doesn't have harsh lighting",
    },
    crowd: {
      x: 400,
      y: 50,
    },
    sign: {
      x: 400,
      y: 50,
    },
  },
  // popUp nested object ends here
  infoPageBorder: {
    x: 40,
    y: 40,
    width: canvas.width - 80,
    height: canvas.height - 80,
  },
  infoPage: {
  x: 50,
  y: 50,
  width: canvas.width-100,
  height:canvas.height-100,
  },
  button: {
    x: canvas.width/2 - 50,
    y: canvas.height - 100,
    width:120,
    height: 30,
  }
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
  drawTRex();
  drawSteg();
  drawSign();
  flickerLight();
  animateGirl();
  animateCrowd();
  moveLight();
  moveCrowd();
  moveSteg();
  moveTRex();
  moveSign();
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

// function makes arms go up and down and stops drawing the crowd after the girl has met them
function animateCrowd() {
  if(state.crowd.x > state.girl.x + 230) {
  if (state.crowd.armsUp === true) {
        drawCrowdArmsUp();
  }
  else {
    drawCrowdArmsDown();
  }
}
else {;}
}

// !!! This animates the canvas by refreshing the animateCanvas function repeatedly !!!
var control = setInterval(animateCanvas,30);

function pauseGame() {
  var stateGame = "Paused";
  console.log(stateGame);
  clearInterval(control);
}
// 2 functions to draw girl walking
function drawGirlStill() {
    var girlStill = new Image();
    girlStill.src = "girl-static-2.png";
    girlStill.onload = function() {
    ctx.drawImage(girlStill, state.girl.x,state.girl.y,400,400);
  }
}

function drawGirlWalk() {
    var girlWalk = new Image();
    girlWalk.src = "girl-walking-2.png";
    girlWalk.onload = function() {
    ctx.drawImage(girlWalk,state.girl.x, state.girl.y,400,400);
  }
}

// 2 functions to draw light flickering
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

// 2 functions to draw crowd flapping
function drawCrowdArmsUp() {
    var armsUp = new Image();
    armsUp.src = "crowd2.png";
    armsUp.onload = function() {
    ctx.drawImage(armsUp,state.crowd.x,50,280,360);
  }
}

function drawCrowdArmsDown() {
    var armsDown = new Image();
    armsDown.src = "crowd1.png";
    armsDown.onload = function() {
    ctx.drawImage(armsDown,state.crowd.x,50,280,360);
  }
}

// 2 functions to draw static dinosaurs pictures
function drawTRex() {
  var tRex = new Image();
  tRex.src = "trex.png";
  tRex.onload = function() {
  ctx.drawImage(tRex,state.trex.x, 50,300,200);
  }
}

function drawSteg() {
  var steg = new Image();
  steg.src = "stegosaurus.png";
  steg.onload = function() {
  ctx.drawImage(steg,state.steg.x, 50,300,200);
  }
}

// function to draw sign
function drawSign() {
  var sign = new Image();
  sign.src = "confusing-sign.png";
  sign.onload = function() {
  ctx.drawImage(sign,state.sign.x, 50,300,200);
  }
}

// function meetObstacle() {
//   pauseGame();
//   drawInfoPage();
//   console.log("i've drawn the info page");
  // next: set up event handler to click button
// }

// when Understood button is clicked
// function clearInfoPage(){
  // redraw canvas
// restart animation

// }


function drawInfoPage() {
  // if(state.gameMode.info) {
  ctx.fillStyle = "black";
  ctx.fillRect(
    state.infoPageBorder.x,
    state.infoPageBorder.y,
    state.infoPageBorder.width,
    state.infoPageBorder.height
  );
  ctx.fillStyle = "white";
  ctx.fillRect(
    state.infoPage.x,
    state.infoPage.y,
    state.infoPage.width,
    state.infoPage.height,
  );
  ctx.fillStyle = "black";
	ctx.font = "20px Tahoma";
	ctx.fillText(state.popUp.lights.bullet1, 120, 100);
  ctx.fillText(state.popUp.lights.bullet2, 120, 200);
  ctx.fillText(state.popUp.lights.bullet3, 120, 300);

  ctx.fillStyle = 'green';
  ctx.fillRect(state.button.x, state.button.y, state.button.width, state.button.height);
    ctx.fillStyle = "white";
    ctx.fillText("Understood", state.button.x + 10, state.button.y + 20);
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
  state.light.x  = state.light.x - 1;
}

function moveCrowd(e){
  state.crowd.x = state.crowd.x -1;
}

function moveSteg(e){
  state.steg.x  = state.steg.x - 1;
}

function moveTRex(e){
  state.trex.x = state.trex.x - 1;
}

function moveSign(e){
  state.sign.x = state.sign.x - 1;
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
  background.src = "plain-bg2.png";
  background.onload = function() {
  ctx.drawImage(background,0,0,canvas.width, canvas.height)};
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
