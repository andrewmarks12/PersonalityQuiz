console.log("script.js connected!");

let buttons = document.querySelectorAll(".answer-btn");

let userAnswers = {};

buttons.forEach(function(button){
  button.addEventListener("click", function() {
    let buttonID = button.dataset.buttonid;
    let response = button.dataset.answer;

 document.querySelectorAll(`[data-buttonid="${buttonID}"]`).forEach(b => {
      b.classList.remove("btn-primary");
      b.classList.add("btn-outline-primary");
    });

    button.classList.remove("btn-outline-primary");
    button.classList.add("btn-primary");

    userAnswers[buttonID] = (response);
  })
})

document.getElementById("show-result").addEventListener("click", function(){
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");

  let result = "";

  if (userAnswers[1] == "B" && userAnswers[2] == "D" && userAnswers[3] == "C") {
    result = "Your attributes seem well fit for Lacrosse, Hockey, and Football."
  } else if (userAnswers[1] == "A" && userAnswers[2] == "B" && userAnswers[3] == "C") {
    result = "You sound like you are well fit to play Soccer or Track & Field."
  } else if (userAnswers[1] == "B" && userAnswers[2] == "A" && userAnswers[3] == "A") {
    result = "Based on your input, you should try E-Sports; league of legends requires a lot of hand-eye-coordination."
  }
  else {
    result = "You may not fit in to one category, but there is a sport for you. A great place to start is soccer, football, or basketball with friends!"
  }

    resultText.innerHTML = result;
  resultContainer.style.display = "block";

})
