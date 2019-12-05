
var canvas = document.querySelector(".game");
// - Game is e.g. class id from html
canvas.width = 700;
canvas.height = 450;
var ctx = canvas.getContext("2d");

var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.get('username'));
// console.log(urlParams.get('password'));


var input = (urlParams.get('username'));

// function(urlParams){
//
// }


window.onload = function alertMe() {
  alert("Hello " + (urlParams.get('username')) + ", " + "and welcome to the Dino Museum! Use the spacebar to start and stop the girl. Let the game begin!");

}

// all figures/objects will go in the state

var state = {
    keyPressed: false,
  gameMode: {
    paused: false,
    info: false,
  },
  girl: {
    walking: false,
    x: 0,
    y: 30,
  },
  welcomeSign: {
    x: 50,
  },
  trex: {
    x: 400,
  },
  light: {
    bright: false,
    // create: lights(),
    x: 850,
    bullet1:"Hello " + input + ". Did you know...",
    bullet2:"- Autistic people can experience sensory overload and ",
    bullet3:"  distractions like flickering lights can be unbearable",
    bullet4:"- The same goes for overpowering noises (eg from video",
    bullet5:"  displays) or strong smells (from your award-winning cafe..).",
    bullet6:"Making your public space autism accessible includes thinking",
    bullet7:"about reducing the sensory input for your autistic visitors to",
    bullet8:"create an environment that is comfortable for them to explore.",
  },
  steg: {
    x: 1100,
  },
  crowd: {
    armsUp: false,
    // appear: people(),
    x: 1550,
    height:350,
    width:350,
    bullet1:"Hello again " + input + "!",
    bullet2:"- Large noisy crowds can provoke anxiety and cause an autistic",
    bullet3:"  person a great deal of distress or a 'meltdown'.",
    bullet4:"- Introduce quiet calm spaces where individuals are able to",
    bullet5:"  relax and take a break.",
    bullet6:"- You can also offer different opening times solely for those who",
    bullet7:"  would benefit from visiting away from the usual hustle and",
    bullet8:"  bustle of the general public.",
  },
  sign: {
    x: 1900,
    speed:0,
    bullet1:"Last one, " + input + "!",
    bullet2:"- The world can be a very unpredictable and confusing place to",
    bullet3:"  autistic people, so it helps if they can prepare in advance.",
    bullet4:"- You have help people prepare for their visit by providing",
    bullet5:"  clear maps and guides which are available beforehand.",
    bullet6:"- Train your staff to be autism-friendly and of course",
    bullet7:"  it is vital you always involve autistic people when thinking",
    bullet8:"  about how to make your space autism-accessible.",
  },
  exitSign: {
    x: 2500,
  },
  spacebar: false,
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
  },
  continueButton:{
  x: canvas.width/2 - 135,
  y: canvas.height/2,
},
  keypad:{
  upPressed: false,
  leftPressed: false,
  rightPressed: false,
  downPressed: false,
  },
  obstacles: [],
  }




// This is our obstacles array for the loop in the girlMeetsObstacle function
state.obstacles = [state.light, state.crowd, state.sign];
var obstacleNumber = 0;
function obstacleCounter() {
obstacleNumber = obstacleNumber + 1;
console.log("obstacle counter function", obstacleNumber);
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
  if (state.trex.x > -1600) {
  clearCanvas();
  drawWelcomeSign();
  drawTRex();
  drawSteg();
  drawSign();
  drawExitSign();
  flickerLight();
  animateGirl();
  animateCrowd();
  moveLight();
  moveCrowd();
  moveWelcomeSign();
  moveSteg();
  moveTRex();
  moveSign();
  moveExitSign();
  girlMeetsObstacle();
  }
  else {
    endGame();
    drawGameOver();
  }
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
  clearInterval(control);
  state.gameMode.paused = true;
  console.log("pause game function", state.gameMode);

}

function endGame() {
  clearInterval(control);
  state.gameMode.paused = false;
  console.log("end game function", state.gameMode);

}
// this pauses the game when the girl meets the obstacle and draws the popup box and fills it with text. Not working on the loop properly
// so the loop is currently set to stop after one round.
function girlMeetsObstacle() {
  for (var i = 0; i < 3; i = i + 1) {
    var obstacle = state.obstacles[i];
    if (obstacle.x <= state.girl.x + 280) {
		state.encounteredObstacle = obstacle;
		state.gameMode.info = true;
    console.log("girl meets obstacle function", state.gameMode);
    if (state.gameMode.info === true) {
    pauseGame();
    setInterval(fillInfoPage, 300);
    }
  }
}
}
// This function fills the popup box with text and changes with each loop.
function fillInfoPage() {
  // this keeps tally of the number of obstacles
  if (state.gameMode.info === true) {
  obstacleCounter();
  // this makes the exit sign appear in the right after the last obstacle
  if (obstacleNumber === 3) {
      state.exitSign.x = 200;
  }
  else {;}
  drawInfoPage();
  // this puts the text in the info box according to the obstacle
  ctx.fillStyle = "black";
  ctx.font = "20px Tahoma";
  ctx.fillText(state.encounteredObstacle.bullet1, 180, 100);
  ctx.fillText(state.encounteredObstacle.bullet2, 70, 150);
  ctx.fillText(state.encounteredObstacle.bullet3, 70, 170);
  ctx.fillText(state.encounteredObstacle.bullet4, 70, 220);
  ctx.fillText(state.encounteredObstacle.bullet5, 70, 240);
  ctx.fillText(state.encounteredObstacle.bullet6, 70, 290);
  ctx.fillText(state.encounteredObstacle.bullet7, 70, 310);
  ctx.fillText(state.encounteredObstacle.bullet8, 70, 330);
  // this is a clumsy way of making the obstacle disappear
  state.encounteredObstacle.x = 10000;
  state.gameMode.info = false
  }
}

canvas.addEventListener("click", clearPopUp);

// on a mouseclick, any popup is cleared and the game is drawn.
// If there is no pop up it it just draws the game once.
function clearPopUp(e) {
  console.log("clear popup function after mouseclick", state.gameMode);
  animateCanvas();
  console.log("draw continue button");
  drawContinueButton();
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

function drawWelcomeSign() {
  var welcomeSign = new Image();
  welcomeSign.src = "welcome-sign.png";
  welcomeSign.onload = function() {
  ctx.drawImage(welcomeSign,state.welcomeSign.x, 50,200,100);
  }
}


// This draws the popup box without the text (same for all three obstacles)
function drawInfoPage() {
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
  ctx.fillStyle = 'green';
  ctx.fillRect(state.button.x, state.button.y, state.button.width, state.button.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Tahoma";
    ctx.fillText("Understood", state.button.x + 10, state.button.y + 20);
}

function drawExitSign() {
  var exitSign = new Image();
  exitSign.src = "exit-sign.jpg";
  exitSign.onload = function() {
  ctx.drawImage(exitSign,state.exitSign.x, 50,275,200);
  }
}
function drawContinueButton() {
  var continueButton = new Image();
  continueButton.src = "continue-button.png";
  continueButton.onload = function() {
  ctx.drawImage(continueButton,state.continueButton.x, state.continueButton.y,273,33);
  }
}

function drawGameOver() {
  ctx.fillStyle = "black";
  ctx.fillRect(
    state.continueButton.x - 3,
    state.continueButton.y -3,
    390, 60
  );
  ctx.fillStyle = "white";
  ctx.fillRect(
    state.continueButton.x,
    state.continueButton.y,
    384,54
  );
  ctx.fillStyle = "black";
  ctx.font = "20px Tahoma";
  ctx.fillText("Game Ended:", state.continueButton.x + 10, state.continueButton.y + 22);
  ctx.fillText("click 'Resources' to go to Guide Summary", state.continueButton.x + 10, state.continueButton.y + 45);
}
//Move things around

function moveLight(e){
  state.light.x  = state.light.x - 2;
}

function moveCrowd(e){
  state.crowd.x = state.crowd.x - 2;
}

function moveSteg(e){
  state.steg.x  = state.steg.x - 2;
}

function moveTRex(e){
  state.trex.x = state.trex.x - 2;
}

function moveSign(e){
  state.sign.x = state.sign.x - 2;
}

function moveWelcomeSign(e){
  state.welcomeSign.x = state.welcomeSign.x - 2;
}

function moveExitSign(e){
  state.exitSign.x = state.exitSign.x - 2;
}

// clear the canvas by redrawing the background each frame
function clearCanvas() {
  drawBackground();
}

// This is called in clearCanvas
function drawBackground() {
  var background = new Image();
  background.src = "plain-bg2.png";
  background.onload = function() {
  ctx.drawImage(background,0,0,canvas.width, canvas.height)};
}



//Spacebar to pause game

function pause () {
  if (state.gameMode.paused){
      clearInterval(control);
      drawContinueButton();
      console.log("louise space bar pause function", state.gameMode);
  } else {
    control = setInterval(animateCanvas,30);
  }
};

function handleKeyDown(e) {
  if (e.code === "Space") {

    // state.keyPressed = true;
    state.gameMode.paused = !state.gameMode.paused;
    pause();
    console.log("space bar pressed toggle function",state.gameMode);
  }
}
document.addEventListener("keydown", handleKeyDown);







//Girl Jumping
//
// function leftKeyDown() {
//   state.girl.y = state.girl.y -15 + 10;
// }
// document.addEventListener("keydown", leftKeyDown);
//




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
