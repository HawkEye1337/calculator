let equation = "";
let num1 = "0";
let num2 = "0";
let op;
let opEntered = false;
let opIndex;
let result = "";
let j = 0;
const operators = ["+", "×", "%", "+", "-"];
const buttons = document.querySelectorAll(".btn");
const screen = document.getElementById("screen");
let displayValue = document.getElementById("screen").textContent;
const output = document.getElementById("output");

//operation functions
function add(num1, num2) {
  return +num1 + +num2;
}
function multiply(num1, num2) {
  return +num1 * +num2;
}
function divide(num1, num2) {
  if (num2 != 0) return +num1 / +num2;
  else return "math error";
}
function subtract(num1, num2) {
  return +num1 - +num2;
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.type === "digit") {
      displayValue += button.textContent;
    } else if (button.dataset.type === "operator" && opEntered === false) {
      displayValue += button.textContent;
      num1 = displayValue.substring(0, displayValue.indexOf(button.textContent));
      op = button.textContent;
      opIndex = displayValue.indexOf(button.textContent);
      opEntered = true;
      console.log(num1);
      console.log("working " + j++);
    } else if (button.dataset.type === "operator" && opEntered === true) {
      num2 = displayValue.substring(opIndex + 1, displayValue.length);
      result = operate(num1, op, num2);
      op = button.textContent;
      output.textContent = result;
      displayValue = result + op;
      opEntered = false;
      // num1 = displayValue.substring(0, displayValue.indexOf(button.textContent));
    } else if (button.dataset.type === "equal") {
      num2 = displayValue.substring(opIndex + 1, displayValue.length);
      result = operate(num1, op, num2);

      output.textContent = result;
    } else if (button.dataset.type === "clear") {
      clear();
    }
    updateScreen();
    console.log("---------------------");
    console.log("display: " + displayValue);
    console.log("num1: " + num1);
    console.log("op: " + op);
    console.log("num2: " + num2);
    console.log("result: " + result);
    console.log("opEntered: " + opEntered);
  });
});
//display on-screen when buttons are pressed

function operate(num1, op, num2) {
  switch (op) {
    case "+":
      return add(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "×":
      return multiply(num1, num2);

    case "÷":
      return divide(num1, num2);
  }
}

function updateScreen() {
  screen.textContent = displayValue;
}
function clear() {
  displayValue = "";
  num1 = "0";
  num2 = "0";
  result = "";
}
