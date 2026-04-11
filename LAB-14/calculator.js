// Arithmetic functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return "Error: Division by zero";
  return a / b;
}

// Main calculation function
function calculate(operation) {
  const a = Number(document.getElementById('num1').value);
  const b = Number(document.getElementById('num2').value);
  let result;

  if (isNaN(a) || isNaN(b)) {
    result = "Error: Please enter valid numbers";
  } else {
    switch (operation) {
      case 'add': result = add(a, b); break;
      case 'subtract': result = subtract(a, b); break;
      case 'multiply': result = multiply(a, b); break;
      case 'divide': result = divide(a, b); break;
      default: result = "Error: Unknown operation";
    }
  }

  document.getElementById('result').textContent = `Result: ${result}`;
}

// Clear function
function clearCalculator() {
  document.getElementById('num1').value = "";
  document.getElementById('num2').value = "";
  document.getElementById('result').textContent = "Result will appear here";
}
