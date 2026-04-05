# LAB 15 - Interactive To-Do List

**Duration:** 60 minutes  
**Points:** 12.5  
**Due:** Wednesday EOD (Week 4)  
**Focus:** DOM manipulation, event handling, dynamic content

---

## 🎯 LEARNING OBJECTIVES

- Select HTML elements with querySelector
- Create elements dynamically with createElement
- Handle click events with addEventListener
- Modify DOM (add/remove elements)
- Toggle CSS classes

---

## 📋 PROJECT DESCRIPTION

Build an interactive To-Do list where users can:
- Add new tasks
- Mark tasks as complete (toggle)
- Delete tasks
- See tasks update in real-time

---

## ✅ REQUIREMENTS

### HTML Structure (Provided in Starter)
- [ ] Input field for new tasks
- [ ] "Add Task" button
- [ ] Empty `<ul>` for task list

### JavaScript Functionality (YOU BUILD)
- [ ] `addTask()` function - creates new task
- [ ] Each task has complete button (toggles ✅)
- [ ] Each task has delete button (❌)
- [ ] Event listeners on buttons
- [ ] Empty input validation

### Bonus Features
- [ ] Clear all tasks button
- [ ] Task counter
- [ ] Enter key to add task
- [ ] Mark all complete button

---

## 📝 STARTER CODE

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lab 15 - To-Do List</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>My To-Do List</h1>
    
    <div class="input-section">
      <input 
        type="text" 
        id="taskInput" 
        placeholder="Enter a new task..."
      >
      <button id="addBtn" onclick="addTask()">Add Task</button>
    </div>
    
    <ul id="taskList">
      <!-- Tasks will be added here dynamically -->
    </ul>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### JavaScript (script.js) - YOU COMPLETE
```javascript
// Get references to elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
  // TODO: Get input value
  const taskText = taskInput.value;
  
  // TODO: Validate (check if empty)
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  
  // TODO: Create list item (li)
  const li = document.createElement('li');
  
  // TODO: Create task text span
  const span = document.createElement('span');
  span.textContent = taskText;
  span.className = 'task-text';
  
  // TODO: Create complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = function() {
    // Toggle 'completed' class on li
    li.classList.toggle('completed');
  };
  
  // TODO: Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function() {
    // Remove this li from taskList
    taskList.removeChild(li);
  };
  
  // TODO: Append elements
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  
  // TODO: Clear input
  taskInput.value = '';
}

// TODO BONUS: Add Enter key support
// taskInput.addEventListener('keypress', function(e) {
//   if (e.key === 'Enter') {
//     addTask();
//   }
// });
```

### CSS (styles.css)
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

.container {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  max-width: 500px;
  width: 100%;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.input-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

#taskInput {
  flex: 1;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 6px;
}

#taskInput:focus {
  outline: none;
  border-color: #667eea;
}

#addBtn {
  padding: 12px 24px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

#addBtn:hover {
  background: #5568d3;
}

#taskList {
  list-style: none;
}

#taskList li {
  padding: 15px;
  background: #f8f9fa;
  margin-bottom: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s;
}

.task-text {
  flex: 1;
  font-size: 16px;
}

.complete-btn, .delete-btn {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.complete-btn {
  background: #28a745;
  color: white;
}

.complete-btn:hover {
  background: #218838;
}

.delete-btn {
  background: #dc3545;
  color: white;
}

.delete-btn:hover {
  background: #c82333;
}

/* Completed task styling */
#taskList li.completed {
  opacity: 0.6;
  background: #e8f5e9;
}

#taskList li.completed .task-text {
  text-decoration: line-through;
  color: #666;
}
```

---

## 🧪 TESTING CHECKLIST

- [ ] Can add new tasks
- [ ] Empty input shows alert
- [ ] Complete button toggles strikethrough
- [ ] Delete button removes task
- [ ] Input clears after adding task
- [ ] No console errors
- [ ] Works in Chrome and Firefox

---

## 📤 SUBMISSION

Submit to Discord #assignments channel:

```
LAB-15 Submission
Name: [Your Name]
GitHub: [Repository URL]
Features: ✅ Add ✅ Complete ✅ Delete
Bonus: [List any bonus features]
Screenshot: [Attach]
```

---

## 📊 GRADING RUBRIC

| Category | Points | Criteria |
|----------|--------|----------|
| **Add Task Function** | 4 | Creates li, span, buttons correctly |
| **Complete Toggle** | 3 | classList.toggle works, styling applies |
| **Delete Function** | 3 | removeChild works correctly |
| **Input Validation** | 1.5 | Checks for empty input |
| **Code Quality** | 1 | Clean code, no errors |
| **TOTAL** | **12.5** | |

---

## 🏆 BONUS CHALLENGES (+1 point each)

**Bonus 1: Enter Key Support**
```javascript
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
```

**Bonus 2: Task Counter**
Show "5 tasks remaining" above list

**Bonus 3: Clear All Button**
Button that removes all tasks from list

**Bonus 4: Edit Task**
Double-click task to edit text

---

## ❓ FAQ

**Q: How do I create an element?**  
A: `const li = document.createElement('li');`

**Q: How do I add it to the page?**  
A: `parentElement.appendChild(childElement);`

**Q: How do I toggle a class?**  
A: `element.classList.toggle('className');`

**Q: How do I remove an element?**  
A: `parentElement.removeChild(childElement);`

**Q: onclick vs addEventListener?**  
A: Both work! `onclick` is simpler for this lab.

---

## 📚 RESOURCES

- [MDN: createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN: appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- [MDN: classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- Today's demo files (demo-01 through demo-05)

---

**Build something you can show off in your portfolio!** 📝✨
