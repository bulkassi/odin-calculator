const display = document.querySelector("#display");
const currentExpression = display.querySelector("#expression");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let operation = {
  firstOperand: "45",
  operator: "+",
  secondOperand: "20",
};

function perform(operation) {
  switch (operation.operator) {
    case "+":
      return add(+operation.firstOperand, +operation.secondOperand);
    case "-":
      return subtract(+operation.firstOperand, +operation.secondOperand);
    case "*":
      return multiply(+operation.firstOperand, +operation.secondOperand);
    case "/":
      return divide(+operation.firstOperand, +operation.secondOperand);
  }
}

function populateDisplay(operation) {
  currentExpression.textContent =
    operation.firstOperand + operation.operator + operation.secondOperand;
}

populateDisplay(operation);
