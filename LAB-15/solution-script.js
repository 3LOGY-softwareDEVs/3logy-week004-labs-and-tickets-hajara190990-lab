// Get references to elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');
const taskCount = document.getElementById('taskCount');
const clearCompletedBtn = document.getElementById('clearCompleted');
const clearAllBtn = document.getElementById('clearAll');

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  
  // Validate
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  
  // Create list item
  const li = document.createElement('li');
  
  // Create task text span
  const span = document.createElement('span');
  span.textContent = taskText;
  span.className = 'task-text';
  
  // Create complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.className = 'complete-btn';
  completeBtn.addEventListener('click', function() {
    li.classList.toggle('completed');
    updateCount();
  });
  
  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li);
    updateCount();
  });
  
  // Append elements
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  
  // Clear input and focus
  taskInput.value = '';
  taskInput.focus();
  
  // Update count
  updateCount();
}

// Update task count
function updateCount() {
  const total = taskList.children.length;
  const completed = taskList.querySelectorAll('.completed').length;
  const remaining = total - completed;
  
  taskCount.textContent = remaining + ' task' + (remaining !== 1 ? 's' : '') + ' remaining';
}

// Click handler for Add button
addBtn.addEventListener('click', addTask);

// Enter key support
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Clear completed tasks
clearCompletedBtn.addEventListener('click', function() {
  const completed = taskList.querySelectorAll('.completed');
  completed.forEach(function(item) {
    taskList.removeChild(item);
  });
  updateCount();
});

// Clear all tasks
clearAllBtn.addEventListener('click', function() {
  if (taskList.children.length === 0) return;
  
  if (confirm('Delete all tasks?')) {
    taskList.innerHTML = '';
    updateCount();
  }
});

// Initialize count
updateCount();
