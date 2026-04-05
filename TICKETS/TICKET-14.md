# TICKET-14: JavaScript Calculator Enhancement

**Assigned:** Week 4 Tuesday  
**Due:** Week 4 Thursday, 9:00 AM  
**Points:** 12.5  
**Type:** Individual Task  
**Sprint:** Sprint 02 - Professional Portfolio Website

---

## 🎯 OBJECTIVE

Enhance Lab 14 calculator with additional operators, validation, and calculation history.

---

## 📋 REQUIREMENTS

### New Functions:

1. `power(base, exponent)` - 2^3 = 8
2. `modulus(a, b)` - 10 % 3 = 1
3. `squareRoot(num)` - √16 = 4
4. `percentage(num, percent)` - 20% of 50 = 10

### Validation:

- [ ] Check for non-numeric inputs
- [ ] Prevent division by zero
- [ ] Prevent negative square root
- [ ] Handle empty inputs
- [ ] User-friendly error messages

### Calculation History:

- [ ] Store last 5 calculations in array
- [ ] Display history list
- [ ] Format: "5 + 3 = 8"
- [ ] Clear history button

### Technical Requirements:

- [ ] Use `let`/`const` (no `var`)
- [ ] Arrow functions where appropriate
- [ ] Array methods for history (push, slice)
- [ ] Clean, commented code

---

## ✅ ACCEPTANCE CRITERIA

- [ ] All 4 new functions work correctly
- [ ] Validation prevents errors
- [ ] History displays last 5 calculations
- [ ] Clear history button works
- [ ] No console.log() in production code

---

## 📤 SUBMISSION

```
TICKET-14 Submission
Name: [Your Name]
GitHub: [URL]
Screenshot: [Show calculator with history]
Features: ✅ 4 operations ✅ Validation ✅ History
```

---

## 💡 TIPS & HINTS

**Power Function:**
```javascript
function power(base, exponent) {
  if (!isValidNumber(base) || !isValidNumber(exponent)) {
    return 'Error: Invalid input';
  }
  return Math.pow(base, exponent);
}
```

**History Management:**
```javascript
function addToHistory(expression, result) {
  calculationHistory.push(`${expression} = ${result}`);
  if (calculationHistory.length > 5) {
    calculationHistory = calculationHistory.slice(-5);
  }
  displayHistory();
}
```

**Resources:**
- [MDN: Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- Tuesday's demos
- Lab 14 starter code
