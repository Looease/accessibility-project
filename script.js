var canvas = document.querySelector(".game");
// - Game is e.g. class id from html
canvas.width = 700;
canvas.height = 500;
var ctx = canvas.getContext("2d");


// all figures/objects will go in the state

// var state = {
//   playerone:{
//     x: 250,
//     y: 250,
//   },
//
// }


// This isn't working
drawGirlWalk();



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
