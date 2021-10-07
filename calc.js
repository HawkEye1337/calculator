const upperDisplay = document.querySelector(".display-1");
const centerDisplay = document.querySelector(".display-2");
const tempResult = document.querySelector(".temp-result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".all-clear");
const backspace = document.querySelector(".backspace");

let prevOperand = "";
let nextOperand = "";
let result = null;
let operation = "";
let dotExists = false;
let sign = "";

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    //check if the input is a dot and no dot was previously entered, if so, change dotExists to true
    if (number.textContent === "." && !dotExists) {
      dotExists = true;
      //if a dot already exists return and don't add anything
    } else if (number.textContent === "." && dotExists) {
      return;
    }
    prevOperand += number.textContent;
    centerDisplay.textContent = prevOperand;
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (!prevOperand) return;
    dotExists = false;
    sign = operator.textContent;
    if (nextOperand && prevOperand && operation) {
      result = doMath(nextOperand, operation, prevOperand);
    } else {
      result = parseFloat(prevOperand);
    }
    clearCenterDisplay(sign);
    operation = sign;
    console.log("result " + result);
  });
});

//assigns prev operand value to next operand, display the value on upper then clear center and prev operand
function clearCenterDisplay(sign) {
  nextOperand = prevOperand + " " + sign + " ";
  upperDisplay.textContent = nextOperand;
  centerDisplay.textContent = "";
  prevOperand = "";
  tempResult.textContent = result;
}
function doMath(nextOperand, operation, prevOperand) {
  switch (operation) {
    case "+":
      return +nextOperand + +prevOperand;
    case "-":
      return +nextOperand - +prevOperand;
    case "x":
      return +nextOperand * +prevOperand;
    case "/":
      if (prevOperand != 0) {
        return +nextOperand / +prevOperand;
      } else return "Error";
  }
}

function allClear() {
  nextOperand = "";
  prevOperand = "";
  result = null;
  sign = "";
  operation = "";
  dotExists = false;
  upperDisplay.textContent = "0";
  centerDisplay.textContent = "0";
  tempResult.textContent = "";
}
clear.addEventListener("click", () => {
  allClear();
});

equal.addEventListener("click", () => {
  if (nextOperand && prevOperand && operation) {
    result = doMath(nextOperand, operation, prevOperand);
  } else {
    result = parseFloat(prevOperand);
  }
  console.log("prev: " + prevOperand);
  console.log("op: " + operation);
  console.log("next: " + nextOperand);
  console.log("result " + result);
  tempResult.textContent = result;
});
