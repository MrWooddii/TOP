const clearButton = document.getElementById("clear");
const negateButton = document.getElementById("negate");
const percentButton = document.getElementById("percent");
const decimalButton = document.getElementById("decimal");
const equalButton = document.getElementById("equal");

let firstNum = "";
let secondNum = "";
let operator = "";

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((b) =>
  b.addEventListener("click", () => {
    operator = b.textContent;
    updateDisplay();
  })
);

const display = document.querySelector(".display");

clearButton.addEventListener("click", () => {
  display.textContent = "0";
  firstNum = "";
  secondNum = "";
  operator = "";
});

const numButtons = document.querySelectorAll(".number");
numButtons.forEach((b) =>
  b.addEventListener("click", () => {
    if (firstNum === "") {
      firstNum = b.textContent;
      updateDisplay();
    } else if (secondNum === "") {
      secondNum = b.textContent;
      updateDisplay();
    }
  })
);

function removeLeadingZeros() {
  let content = display.textContent;
  if (content.length >= 1 && content.charAt(0) === "0") {
    updateDisplay("");
  }
}

function updateDisplay() {
  //   removeLeadingZeros();
  display.textContent = firstNum + operator + secondNum;
  console.log("updated Display");
}
