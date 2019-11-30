var canvas = document.querySelector(".game");
// - Game is e.g. class id from html
canvas.width = 700;
canvas.height = 500;
var ctx = canvas.getContext("2d");


// all figures/objects will go in the state

var state = {
  girl: {
    walking: false,
  }


//   playerone:{
//     x: 250,
//     y: 250,
//   },
//
}


function flipState() {
  if(state.girl.walking === false) {
console.log("can you see this");
    state.girl.walking === true;
    return(state.girl.walking);
    console.log(state.girl.walking);
}
    else if (state.girl.walking === true) {
      console.log("what about this");
      state.girl.walking === false;
      return(state.girl.walking);
      console.log(state.girl.walking);
    }
}

setInterval(flipState(),500);
// This isn't working as an animation - need help!

function animateGirl() {
  if (state.girl.walking === true) {
    clearCanvas();
    drawGirlWalk();
  }
  else {
    clearCanvas();
    drawGirlStill();
  }
}

setInterval(animateGirl,300);

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

function clearCanvas() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}


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



// I was thinking we could have a function that moves the player up and down past obstacles.
//That means we can build in an object detection warning if they collide with something e.g.:

//function movePlayer (e){
//  state.playerone.y = state.playerone.y - 100;

//} canvas.addEventListener("click", movePlayer)







//Then we need all the functions to move things on to the page.

//There will be 1 function to run all the functions

// 1 clear canvas function

//make playerone function

//make flashing light functions

// make people getting in the way function

// make confusing signs function

// make clock ticking function
