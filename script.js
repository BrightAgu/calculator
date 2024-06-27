let currentNumber = "";
let previousNumber = "";
let operation = undefined;

function appendNumber(number) {
  if (number === "." && currentNumber.includes(".")) return;
  currentNumber = currentNumber.toString() + number.toString();
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentNumber;
}
function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = undefined;
  updateDisplay();
}

function backspace() {
    let currentNumber = display.innerText;
    if (currentNumber.length > 1) {
        display.innerText = currentNumber.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}


function chooseOperation(op) {
  if (currentNumber === "") return;
  if (previousNumber !== "") {
    calculate();
  }
  operation = op;
  previousNumber = currentNumber;
  currentNumber = "";
}

function calculate() {
  let computation;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return;
  }
  currentNumber = computation.toString();
  operation = undefined;
  previousNumber = "";
  updateDisplay();
}
