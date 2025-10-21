console.log("script.js connected!");

let buttons = document.querySelectorAll("button");

buttons.forEach(function(button){
  button.addEventListener("click", function() {
    console.log("button clicked!");
  })
})
