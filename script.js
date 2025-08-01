const display = document.querySelector("#display");
const currentExpression = display.querySelector("#expression");

const numberButtons = document.querySelector("#numbers");
const operatorButtons = document.querySelector("#operations");

numberButtons.addEventListener("click", function handleNumberPress(e) {
  const numberPressed = e.target.id.at(-1);

  if (currentExpression.textContent === "0") {
    currentExpression.textContent = numberPressed;
    operation.firstOperand = numberPressed;
  } else {
    if (operation.operator === "") {
      operation.firstOperand += numberPressed;
    } else {
      operation.secondOperand += numberPressed;
    }
    currentExpression.textContent += numberPressed;
  }

  console.log(operation);
});

operatorButtons.addEventListener("click", function handleOperatorPress(e) {
  const operatorPressed = e.target.textContent;

  if (operatorPressed === "C") {
    currentExpression.textContent = "0";
    operation.firstOperand = "";
    operation.operator = "";
    operation.secondOperand = "";
  } else {
    if (operation.secondOperand != "") {
      populateDisplay(operation);
      operation.firstOperand = perform(operation).toString();
      operation.secondOperand = "";
    }

    if (operatorPressed != "=") {
      currentExpression.textContent += operatorPressed;
      operation.operator = operatorPressed;
    } else {
      operation.operator = "";
    }
  }

  console.log(operation);
});

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
  firstOperand: "",
  operator: "",
  secondOperand: "",
};

function perform(operation) {
  switch (operation.operator) {
    case "+":
      return add(+operation.firstOperand, +operation.secondOperand);
    case "-":
      return subtract(+operation.firstOperand, +operation.secondOperand);
    case "x":
      return multiply(+operation.firstOperand, +operation.secondOperand);
    case "/":
      return divide(+operation.firstOperand, +operation.secondOperand);
  }
}

function populateDisplay(operation) {
  currentExpression.textContent = Math.round(perform(operation) * 1000) / 1000;
}
