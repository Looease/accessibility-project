var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.get('username'));
console.log(urlParams.get('password'));


var input = (urlParams.get('username'));

// function(urlParams){
//
// }


window.onload = function alertMe() {
  alert("Hello " + (urlParams.get('username')) + ", " + "let the game begin!");

}

// alert("Hello " + (urlParams.get('username')) + ", " + "let the game begin!");

// function URLSearchParams(){
//
// }
// document.addEventListener("click", alertMe)
