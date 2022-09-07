"use strict";

let currentInput = document.querySelector(".current-input");

let answerScreen = document.querySelector(".answer-screen");

let buttons = document.querySelectorAll("button");

let eraseBtn = document.querySelector("#erase");

let clearBtn = document.querySelector("#clear");
// console.log(clearBtn);
let evaluate = document.querySelector("#evaluate");

let realTimeScreenValue = [];

clearBtn.addEventListener("click", () => {
  console.log("Test");
  realTimeScreenValue = [""];
  answerScreen.innerHTML = 0;
  currentInput.className = "current-input";
  answerScreen.className = "answer-screen";
  answerScreen.style.color = "rgba(150,150,150,0.87)";
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // When clicked button is not erased button
    if (!btn.id.match("erase")) {
      //To display value on btn press
      realTimeScreenValue.push(btn.value);
      currentInput.innerHTML = realTimeScreenValue.join("");
      // TO evaluate answer in real time
      if (btn.classList.contains("num_btn")) {
        answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
      }
    }

    // When erase button is pressed is clicked
    if (btn.id.match("erase")) {
      realTimeScreenValue.pop();
      currentInput.innerHTML = realTimeScreenValue.join("");
      answerScreen.innerHTML = eval(realTimeScreenValue.join(""));
    }

    // When clicked button is evaluate button
    if (btn.id.match("evaluate")) {
      currentInput.className = "answer-screen";
      currentInput.className = "current-input";
      answerScreen.style.color = "#fff";
    }

    // To prevent undefined error in screen
    if (typeof eval(realTimeScreenValue.join("")) === "undefined") {
      answerScreen.innerHTML = 0;
    }
  });
});
