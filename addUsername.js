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

// alert("Hello " + (urlParams.get('username')) + ", " + "let the game begin!");

// function URLSearchParams(){
//
// }
// document.addEventListener("click", alertMe)
