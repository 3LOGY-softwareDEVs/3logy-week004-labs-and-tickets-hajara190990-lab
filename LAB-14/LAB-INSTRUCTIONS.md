# LAB 14 - JavaScript Calculator

**Duration:** 60 minutes  
**Points:** 12.5  
**Due:** Tuesday EOD (Week 4)  
**Focus:** JavaScript fundamentals, functions, DOM interaction

---

## 🎯 LEARNING OBJECTIVES

- Write JavaScript variables, functions, and control flow
- Connect JavaScript to HTML elements
- Handle button click events
- Display dynamic results on a webpage
- Debug JavaScript in browser console

---

## 📋 PROJECT DESCRIPTION

Build a simple calculator that performs basic arithmetic operations using JavaScript.

**Features:**
- Two number inputs
- Four operation buttons (+, -, ×, ÷)
- Display result dynamically
- Clear button to reset
- Error handling for division by zero

---

## ✅ REQUIREMENTS

### HTML Structure (Required)
- [ ] Two `<input type="number">` fields for numbers
- [ ] Four operation buttons (+, -, ×, ÷)
- [ ] Clear button
- [ ] Result display area (`<div>` or `<p>`)

### JavaScript Functionality (Required)
- [ ] `add(a, b)` function
- [ ] `subtract(a, b)` function
- [ ] `multiply(a, b)` function
- [ ] `divide(a, b)` function (with zero check)
- [ ] `calculate(operation)` function that calls the others
- [ ] `clearCalculator()` function to reset inputs and result

### Event Handling (Required)
- [ ] Click handlers for all operation buttons
- [ ] Click handler for clear button
- [ ] Display result in the result area

### Error Handling (Required)
- [ ] Check for division by zero
- [ ] Display error message for invalid operations
- [ ] Handle empty inputs

---

## 📝 STARTER CODE

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lab 14 - JavaScript Calculator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="calculator">
    <h1>JavaScript Calculator</h1>
    
    <div class="inputs">
      <input type="number" id="num1" placeholder="First number">
      <input type="number" id="num2" placeholder="Second number">
    </div>
    
    <div class="buttons">
      <button onclick="calculate('add')">+</button>
      <button onclick="calculate('subtract')">-</button>
      <button onclick="calculate('multiply')">×</button>
      <button onclick="calculate('divide')">÷</button>
      <button onclick="clearCalculator()" class="clear">Clear</button>
    </div>
    
    <div id="result" class="result">
      Result will appear here
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### JavaScript (script.js) - **YOU COMPLETE THIS**
```javascript
// Get references to DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDiv = document.getElementById('result');

// TODO: Create add function
function add(a, b) {
  // Your code here
}

// TODO: Create subtract function
function subtract(a, b) {
  // Your code here
}

// TODO: Create multiply function
function multiply(a, b) {
  // Your code here
}

// TODO: Create divide function (check for division by zero!)
function divide(a, b) {
  // Your code here
  // Hint: if (b === 0) { return error }
}

// TODO: Create calculate function
function calculate(operation) {
  // 1. Get values from inputs
  // 2. Convert to numbers
  // 3. Call appropriate function based on operation
  // 4. Display result
  
  // Hints:
  // const a = Number(num1Input.value);
  // const b = Number(num2Input.value);
  // 
  // if (operation === 'add') {
  //   result = add(a, b);
  // } else if ...
  //
  // resultDiv.textContent = `Result: ${result}`;
}

// TODO: Create clearCalculator function
function clearCalculator() {
  // 1. Clear both inputs
  // 2. Reset result display
}

// Log to console that script is loaded
console.log('Calculator loaded!');
```

### CSS (styles.css) - Starter Styling
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.calculator {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  max-width: 400px;
  width: 100%;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.inputs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input[type="number"] {
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 6px;
}

input[type="number"]:focus {
  outline: none;
  border-color: #667eea;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background: #5568d3;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

button.clear {
  grid-column: span 4;
  background: #e74c3c;
}

button.clear:hover {
  background: #c0392b;
}

.result {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 6px;
  text-align: center;
  font-size: 18px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ddd;
}
```

---

## 🧪 SOLUTION HINTS

### Add Function
```javascript
function add(a, b) {
  return a + b;
}
```

### Divide Function with Error Checking
```javascript
function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}
```

### Calculate Function Structure
```javascript
function calculate(operation) {
  const a = Number(num1Input.value);
  const b = Number(num2Input.value);
  
  // Check for empty inputs
  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = "Please enter valid numbers";
    return;
  }
  
  let result;
  
  if (operation === 'add') {
    result = add(a, b);
  } else if (operation === 'subtract') {
    result = subtract(a, b);
  } else if (operation === 'multiply') {
    result = multiply(a, b);
  } else if (operation === 'divide') {
    result = divide(a, b);
  }
  
  resultDiv.textContent = `Result: ${result}`;
}
```

---

## 🧪 TESTING CHECKLIST

- [ ] Addition works correctly
- [ ] Subtraction works correctly
- [ ] Multiplication works correctly
- [ ] Division works correctly
- [ ] Division by zero shows error message
- [ ] Clear button resets everything
- [ ] Empty inputs handled gracefully
- [ ] No console errors (F12 → Console)
- [ ] Tested decimal numbers (3.5 + 2.5 = 6)

---

## 📤 SUBMISSION

Submit to Discord #assignments channel:

```
LAB-14 Submission
Name: [Your Name]
GitHub: [Repository URL]
Calculator Features: ✅ All operations ✅ Error handling ✅ Clear button
Screenshot: [Attach]
```

---

## 📊 GRADING RUBRIC

| Category | Points | Criteria |
|----------|--------|----------|
| **Functions** | 4 | All 4 operation functions work correctly |
| **Calculate Function** | 3 | Properly calls operation functions, displays results |
| **Error Handling** | 2.5 | Division by zero, empty inputs handled |
| **Clear Function** | 1.5 | Resets inputs and result display |
| **Code Quality** | 1.5 | Clean code, comments, no console errors |
| **TOTAL** | **12.5** | |

---

## 🏆 BONUS CHALLENGES (+1 point each)

**Bonus 1: Keyboard Support**
- Allow Enter key to calculate
- Number keys work in inputs

**Bonus 2: Operation History**
- Display last 5 calculations below result
- Format: "5 + 3 = 8"

**Bonus 3: Additional Operations**
- Power (x^y)
- Square root
- Percentage

**Bonus 4: Styling Enhancements**
- Number pad layout (like calculator app)
- Animation when showing result
- Different colors for each operation type

---

## ❓ FREQUENTLY ASKED QUESTIONS

**Q: Why use Number() to convert input values?**  
A: Input values are always strings. `Number("5")` converts string "5" to number 5.

**Q: What's the difference between `==` and `===`?**  
A: Always use `===` (strict equality). `==` does type coercion which can cause bugs.

**Q: Can I use `eval()` for this?**  
A: NO! `eval()` is dangerous and against best practices. Use separate functions.

**Q: How do I debug if something doesn't work?**  
A: Use `console.log()` to check values. Example: `console.log('a =', a, 'b =', b);`

---

## 📚 RESOURCES

- [MDN: JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- Today's demo files (demo-01 through demo-06)

---

**Good luck! Ask questions if you get stuck!** 🚀
