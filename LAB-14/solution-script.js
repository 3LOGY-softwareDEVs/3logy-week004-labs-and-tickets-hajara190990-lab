// Get references to DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDiv = document.getElementById('result');
const historyList = document.getElementById('historyList');

// History array
let history = [];

// Operation functions
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
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

// Calculate function
function calculate(operation) {
  const a = Number(num1Input.value);
  const b = Number(num2Input.value);
  
  // Check for empty inputs
  if (num1Input.value === '' || num2Input.value === '') {
    resultDiv.textContent = "Please enter both numbers";
    resultDiv.className = 'result error';
    return;
  }
  
  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = "Please enter valid numbers";
    resultDiv.className = 'result error';
    return;
  }
  
  let result;
  let symbol;
  
  if (operation === 'add') {
    result = add(a, b);
    symbol = '+';
  } else if (operation === 'subtract') {
    result = subtract(a, b);
    symbol = '-';
  } else if (operation === 'multiply') {
    result = multiply(a, b);
    symbol = '×';
  } else if (operation === 'divide') {
    result = divide(a, b);
    symbol = '÷';
  }
  
  // Check for error result (division by zero)
  if (typeof result === 'string') {
    resultDiv.textContent = result;
    resultDiv.className = 'result error';
    return;
  }
  
  // Round to avoid floating point issues
  const displayResult = Number.isInteger(result) ? result : parseFloat(result.toFixed(4));
  
  resultDiv.textContent = `Result: ${displayResult}`;
  resultDiv.className = 'result success';
  
  // Add to history
  addToHistory(`${a} ${symbol} ${b} = ${displayResult}`);
}

// Clear function
function clearCalculator() {
  num1Input.value = '';
  num2Input.value = '';
  resultDiv.textContent = 'Result will appear here';
  resultDiv.className = 'result';
  num1Input.focus();
}

// History functions
function addToHistory(entry) {
  history.unshift(entry);
  
  // Keep only last 5
  if (history.length > 5) {
    history.pop();
  }
  
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = '';
  
  history.forEach(function(entry) {
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
  });
}

// Log to console that script is loaded
console.log('Calculator loaded!');
